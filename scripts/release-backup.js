import { execSync } from 'child_process';
import fs from 'fs';
import inquirer from 'inquirer';

// Exécute une commande shell et renvoie la sortie, avec gestion des erreurs
const runCommand = (command, silent = false) => {
  try {
    if (!silent) console.log(`\nExécution : ${command}`);
    return execSync(command, { stdio: silent ? 'pipe' : 'inherit' });
  } catch (err) {
    console.error(`Erreur lors de l'exécution : ${command}`);
    throw err;
  }
};

// Vérifie si une branche existe localement
const branchExists = branchName => {
  try {
    runCommand(`git rev-parse --verify ${branchName}`, true);
    return true;
  } catch {
    return false;
  }
};

// Vérifie si une branche existe sur le dépôt distant
const remoteBranchExists = branchName => {
  try {
    const result = runCommand(`git ls-remote --heads origin ${branchName}`, true);
    return result.length > 0;
  } catch {
    return false;
  }
};

// Gère l'existence d'une branche et propose des options pour la recréer
const handleExistingBranch = async branchName => {
  const existsLocally = branchExists(branchName);
  const existsRemotely = remoteBranchExists(branchName);

  if (existsLocally || existsRemotely) {
    const where = existsLocally ? 'localement' : 'distantement';
    const { forceCreateBranch } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'forceCreateBranch',
        message: `La branche ${branchName} existe ${where}. Voulez-vous la recréer ?`,
        default: false,
      },
    ]);

    if (forceCreateBranch) {
      if (existsRemotely) runCommand(`git push origin --delete ${branchName}`);
      if (existsLocally) runCommand(`git branch -D ${branchName}`);
    } else {
      console.log('Opération annulée.');
      process.exit(0);
    }
  }
};

// Met à jour les dépendances @ta/ dans le package.json
const updateTechatomePackages = version => {
  const packageJsonPath = './package.json';
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  let updated = false;
  ['dependencies', 'devDependencies'].forEach(depType => {
    if (packageJson[depType]) {
      Object.keys(packageJson[depType]).forEach(key => {
        if (key.startsWith('@ta/')) {
          packageJson[depType][key] = version;
          updated = true;
          console.log(`Mise à jour : ${key} -> ${version}`);
        }
      });
    }
  });

  if (updated) {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
    console.log('✅ package.json mis à jour avec succès.');
  } else {
    console.log('Aucune dépendance @ta/ trouvée. Aucun changement effectué.');
  }
};

// Met à jour la version dans le package.json
const updatePackageVersion = newVersion => {
  const packageJsonPath = './package.json';
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log(`Version mise à jour dans package.json : ${newVersion}`);
};

// Calcule la prochaine version en fonction de l'incrément
const getNextReleaseVersion = (currentVersion, incrementType) => {
  const [major, minor, patch] = currentVersion.split('.').map(Number);
  switch (incrementType) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    default:
      throw new Error("Type d'incrémentation invalide");
  }
};

// Processus principal
async function main() {
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  const currentVersion = packageJson.version;

  if (!currentVersion) {
    console.error('Version actuelle introuvable dans package.json.');
    process.exit(1);
  }

  const { incrementType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'incrementType',
      message: "Quel type d'incrémentation souhaitez-vous (major, minor, patch) ?",
      choices: ['major', 'minor', 'patch'],
      default: 'minor',
    },
  ]);

  const releaseVersion = getNextReleaseVersion(currentVersion, incrementType);
  const releaseBranch = `releases/${releaseVersion}`;

  runCommand('git fetch --all');
  await handleExistingBranch(releaseBranch);

  runCommand('git checkout develop');
  runCommand('git pull');
  runCommand(`git checkout -b ${releaseBranch}`);

  const { taVersion } = await inquirer.prompt([
    {
      type: 'input',
      name: 'taVersion',
      message: 'Entrez la version des packages @ta/ à appliquer (ex: 1.0.0):',
    },
  ]);

  updateTechatomePackages(taVersion);
  updatePackageVersion(releaseVersion);

  runCommand('yarn install');
  runCommand('yarn run build');

  runCommand('git add .');
  runCommand(`git commit -m "Release ${releaseVersion}: Mise à jour des packages @ta/ et version ${taVersion}"`);
  runCommand(`git push --set-upstream origin ${releaseBranch}`);

  runCommand('git checkout master');
  runCommand('git pull origin master');
  runCommand(`git merge ${releaseBranch}`);
  runCommand('git push');

  console.log(`🎉 Release ${releaseVersion} créée et fusionnée avec succès sur master !`);

  const { syncDevelop } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'syncDevelop',
      message: 'Souhaitez-vous redescendre master dans develop ?',
      default: true,
    },
  ]);

  if (syncDevelop) {
    runCommand('git checkout develop');
    runCommand('git pull origin master');
    runCommand('git push');
    console.log('✅ La branche develop est désormais synchronisée avec master.');
  }
}

// Démarre le script
main().catch(error => {
  console.error('Erreur inattendue :', error);
  process.exit(1);
});
