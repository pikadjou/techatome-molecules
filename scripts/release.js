import { execSync } from "child_process";
import fs from "fs";
import inquirer from "inquirer";
import simpleGit from "simple-git";

import { config } from "./config.js";

const git = simpleGit();

// Exécution d'une commande avec simple-git
async function fetchAllBranches() {
  try {
    await git.fetch(["--all"]);
    console.log("✔ Branches distantes synchronisées.");
  } catch (err) {
    console.error(
      "❌ Erreur lors de la récupération des branches :",
      err.message
    );
    process.exit(1);
  }
}

async function branchExists(branchName) {
  try {
    const branches = await git.branch(["--list", branchName]);
    return branches.all.includes(branchName);
  } catch (err) {
    console.error(
      "❌ Erreur lors de la vérification de la branche :",
      err.message
    );
    process.exit(1);
  }
}

async function remoteBranchExists(branchName) {
  try {
    const result = await git.listRemote(["--heads", "origin", branchName]);
    return result.length > 0;
  } catch (err) {
    console.error(
      "❌ Erreur lors de la vérification de la branche distante :",
      err.message
    );
    process.exit(1);
  }
}

async function handleExistingBranch(branchName) {
  const existsLocally = await branchExists(branchName);
  const existsRemotely = await remoteBranchExists(branchName);

  if (existsLocally || existsRemotely) {
    const where = existsLocally ? "localement" : "distantement";
    const { forceCreateBranch } = await inquirer.prompt([
      {
        type: "confirm",
        name: "forceCreateBranch",
        message: `La branche ${branchName} existe ${where}. Voulez-vous la recréer ?`,
        default: false,
      },
    ]);

    if (forceCreateBranch) {
      if (existsRemotely) {
        await git.push("origin", "--delete", branchName);
        console.log(`✔ Branche distante ${branchName} supprimée.`);
      }
      if (existsLocally) {
        await git.deleteLocalBranch(branchName, true);
        console.log(`✔ Branche locale ${branchName} supprimée.`);
      }
    } else {
      console.log("❌ Opération annulée.");
      process.exit(0);
    }
  }
}

function readPackageJson() {
  try {
    const packageJson = JSON.parse(
      fs.readFileSync(config.packageJsonPath, "utf8")
    );
    return packageJson;
  } catch (err) {
    console.error(
      `❌ Erreur : Impossible de lire ${config.packageJsonPath}.`,
      err.message
    );
    process.exit(1);
  }
}

function writePackageJson(packageJson) {
  try {
    fs.writeFileSync(
      config.packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      "utf8"
    );
    console.log("✔ package.json mis à jour avec succès.");
  } catch (err) {
    console.error(
      `❌ Erreur : Impossible d'écrire dans ${config.packageJsonPath}.`,
      err.message
    );
    process.exit(1);
  }
}

// Fonction pour mettre à jour la version dans package.json
function updateVersionInPackageJson(version) {
  const packageJson = readPackageJson();
  packageJson.version = version;
  writePackageJson(packageJson);
}

async function installDependencies() {
  try {
    execSync("yarn install", { stdio: "inherit" });
    console.log("✔ Dépendances installées avec succès.");
  } catch (err) {
    console.error(
      "❌ Erreur lors de l'installation des dépendances :",
      err.message
    );
    process.exit(1);
  }
}

async function buildProject() {
  try {
    execSync("yarn run build", { stdio: "inherit" });
    console.log("✔ Projet construit avec succès.");
  } catch (err) {
    console.error("❌ Erreur lors de la construction du projet :", err.message);
    process.exit(1);
  }
}

async function waitForNextCommitOnMaster() {
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

// Fonction pour la gestion des commits, push, fusion et synchronisation
async function handleGitOperations(releaseBranch, releaseVersion) {
  // Gestion des commits et push
  await git.checkout("develop");
  await git.pull("origin", "develop");
  await git.checkoutLocalBranch(releaseBranch);

  await git.add(".");
  await git.commit(`Release ${releaseVersion}`);
  await git.push("origin", releaseBranch);

  console.log(`✔ Release ${releaseVersion} créée et poussée avec succès.`);

  // Fusion avec master
  await git.checkout("master");
  await git.pull("origin", "master");
  await git.mergeFromTo(releaseBranch, "master");
  await git.push("origin", "master");

  console.log(`✔ Release ${releaseVersion} fusionnée avec succès dans master.`);

  await waitForNextCommitOnMaster();

  // Fusion de master vers la branche de release
  await git.checkout(releaseBranch);
  await git.mergeFromTo("master", releaseBranch);
  await git.push("origin", releaseBranch);

  console.log(
    `✔ Master redescendu dans la branche de release ${releaseBranch}.`
  );

  // Synchronisation de develop
  const { syncDevelop } = await inquirer.prompt([
    {
      type: "confirm",
      name: "syncDevelop",
      message: "Souhaitez-vous redescendre master dans develop ?",
      default: config.syncDevelopDefault,
    },
  ]);

  if (syncDevelop) {
    await git.checkout("develop");
    await git.pull("origin", "master");
    await git.push("origin", "develop");
    console.log("✔ La branche develop est désormais synchronisée avec master.");
  }
}

function getNextReleaseVersion(currentVersion, incrementType) {
  const [major, minor, patch] = currentVersion.split(".").map(Number);
  switch (incrementType) {
    case "major":
      return `${major + 1}.0.0`;
    case "minor":
      return `${major}.${minor + 1}.0`;
    case "patch":
      return `${major}.${minor}.${patch + 1}`;
    default:
      throw new Error("Type d'incrémentation invalide");
  }
}

// Fonction principale
async function main() {
  const packageJson = readPackageJson();
  const currentVersion = packageJson.version;

  if (!currentVersion) {
    console.error("❌ Version actuelle introuvable dans package.json.");
    process.exit(1);
  }

  const { incrementType } = await inquirer.prompt([
    {
      type: "list",
      name: "incrementType",
      message:
        "Quel type d'incrémentation souhaitez-vous (major, minor, patch) ?",
      choices: ["major", "minor", "patch"],
      default: config.defaultIncrementType,
    },
  ]);

  const releaseVersion = getNextReleaseVersion(currentVersion, incrementType);
  const releaseBranch = `${config.releaseBranchPrefix}${releaseVersion}`;

  await fetchAllBranches();
  await handleExistingBranch(releaseBranch);

  // Mise à jour de la version
  updateVersionInPackageJson(releaseVersion);

  // Installation des dépendances et construction du projet
  await installDependencies();
  await buildProject();

  // Gestion des commits, push, fusion avec master et synchronisation de develop
  await handleGitOperations(releaseBranch, releaseVersion);
}

main().catch((err) => {
  console.error("❌ Erreur inattendue :", err.message);
  process.exit(1);
});
