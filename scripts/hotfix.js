import fs from "fs";
import simpleGit from "simple-git";

const git = simpleGit();

// Fonction pour récupérer et incrémenter la version
function getNextPatchVersion(currentVersion) {
  const [major, minor, patch] = currentVersion.split(".").map(Number);
  return `${major}.${minor}.${patch + 1}`;
}

// Fonction pour récupérer et incrémenter la version dans package.json
function updateVersionInPackageJson() {
  const packageJsonPath = "./package.json";
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const currentVersion = packageJson.version;

  if (!currentVersion) {
    console.error("❌ Version actuelle introuvable dans package.json.");
    process.exit(1);
  }

  const newVersion = getNextPatchVersion(currentVersion);
  packageJson.version = newVersion;

  try {
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      "utf8"
    );
    console.log(`✔ Version mise à jour à ${newVersion} dans package.json.`);
  } catch (err) {
    console.error(
      "❌ Erreur lors de la mise à jour de package.json :",
      err.message
    );
    process.exit(1);
  }
}

// Fonction pour attendre un nouveau commit sur master
async function waitForNextCommitOnMaster(previousCommitHash) {
  console.log("⏳ En attente du prochain commit sur la branche master...");

  let newCommitHash;
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Vérifier toutes les 5 secondes

    try {
      newCommitHash = await git.revparse(["HEAD"]);
      if (newCommitHash !== previousCommitHash) {
        console.log(`✔ Nouveau commit détecté sur master : ${newCommitHash}`);
        break;
      }
    } catch (err) {
      console.error(
        "❌ Erreur lors de la vérification des commits sur master :",
        err.message
      );
      process.exit(1);
    }
  }
}

// Fonction principale pour effectuer le hotfix
async function hotfix() {
  // 1. Mettre la branche à jour et à jour avec master
  const currentBranch = await git.revparse(["--abbrev-ref", "HEAD"]); // Récupère le nom de la branche actuelle
  console.log(`✔ Vous êtes sur la branche : ${currentBranch}`);

  await git.fetch(["--all"]);
  await git.checkout(currentBranch);
  await git.pull("origin", currentBranch);

  // Mettre à jour la branche avec master
  await git.checkout("master");
  await git.pull("origin", "master");
  await git.checkout(currentBranch);
  await git.mergeFromTo("master", currentBranch);

  console.log(`✔ Branche ${currentBranch} mise à jour avec master.`);

  // 2. Incrémenter la version dans package.json (patch)
  updateVersionInPackageJson();

  // 3. Committer les changements
  await git.add(".");
  await git.commit("Hotfix - mise à jour de la version");

  console.log("✔ Changements commités.");

  // 4. Remote la branche actuelle sur le dépôt distant
  await git.push("origin", currentBranch);
  console.log(`✔ Branche ${currentBranch} poussée sur le dépôt distant.`);

  // 5. Remonter la branche de hotfix sur master
  await git.checkout("master");
  await git.pull("origin", "master");
  await git.mergeFromTo(currentBranch, "master");
  await git.push("origin", "master");

  console.log(
    `✔ Branche ${currentBranch} fusionnée dans master et poussée sur origin.`
  );

  // 6. Attendre le prochain commit sur master
  let previousCommitHash;
  try {
    // Récupérer le dernier commit hash avant la fusion
    previousCommitHash = await git.revparse(["HEAD"]);
    console.log(
      `✔ Commit actuel sur master avant la fusion : ${previousCommitHash}`
    );
  } catch (err) {
    console.error(
      "❌ Erreur lors de la récupération du commit actuel sur master :",
      err.message
    );
    process.exit(1);
  }

  // Appeler la fonction pour attendre le prochain commit
  await waitForNextCommitOnMaster(previousCommitHash);

  // 7. Redescendre master dans la branche de hotfix et dans develop
  await git.checkout(currentBranch);
  await git.mergeFromTo("master", currentBranch);
  await git.push("origin", currentBranch);

  console.log(
    `✔ Master redescendu dans la branche de hotfix ${currentBranch}.`
  );

  await git.checkout("develop");
  await git.pull("origin", "develop");
  await git.mergeFromTo("master", "develop");
  await git.push("origin", "develop");

  console.log("✔ Master redescendu dans la branche develop.");
}

hotfix().catch((err) => {
  console.error("❌ Erreur inattendue :", err.message);
  process.exit(1);
});
