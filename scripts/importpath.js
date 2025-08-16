import fs from 'fs';
import path from 'path';
import readline from 'readline';

// Charger app.config.js dynamiquement
import { appConfig } from './app.config.js';

// Créer une interface pour lire l'entrée de l'utilisateur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Afficher la liste des partenaires avec des numéros
const partenaires = Object.keys(appConfig);
console.log('Sélectionner un partenaire :');
partenaires.forEach((partenaire, index) => {
  console.log(`${index + 1}. ${partenaire}`);
});

// Demander à l'utilisateur de sélectionner un partenaire
rl.question('Entrez le numéro du partenaire que vous souhaitez choisir : ', choix => {
  const index = parseInt(choix) - 1;

  if (index >= 0 && index < partenaires.length) {
    const partenaire = partenaires[index];
    const selectedPath = appConfig[partenaire];

    // Construire le chemin absolu vers tsconfig.json du répertoire distant
    const tsconfigPath = path.join(selectedPath, 'tsconfig.json');

    // Vérifier si le fichier tsconfig.json du répertoire distant existe
    if (!fs.existsSync(tsconfigPath)) {
      console.log(`Le fichier tsconfig.json n'a pas été trouvé à l'emplacement : ${tsconfigPath}`);
      rl.close();
      return;
    }

    // Lire le tsconfig.json du répertoire courant (d'où est exécuté le script)
    const currentTsconfigPath = path.join(process.cwd(), 'tsconfig.json');
    if (!fs.existsSync(currentTsconfigPath)) {
      console.log(`Le fichier tsconfig.json du répertoire courant n'a pas été trouvé : ${currentTsconfigPath}`);
      rl.close();
      return;
    }

    const currentTsconfig = JSON.parse(fs.readFileSync(currentTsconfigPath, 'utf-8'));

    // Vérifier si la propriété paths existe dans tsconfig.json du répertoire courant
    if (!currentTsconfig.compilerOptions || !currentTsconfig.compilerOptions.paths) {
      console.log("La propriété paths n'existe pas dans le tsconfig.json du répertoire courant.");
      rl.close();
      return;
    }

    const currentPaths = currentTsconfig.compilerOptions.paths;
    const taPaths = Object.keys(currentPaths).filter(key => key.startsWith('@ta'));

    // Vérifier si le fichier tsconfig.json du répertoire distant contient la propriété paths
    const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'));
    if (!tsconfig.compilerOptions) {
      tsconfig.compilerOptions = {};
    }
    if (!tsconfig.compilerOptions.paths) {
      tsconfig.compilerOptions.paths = {};
    }

    // Demander si l'utilisateur veut ajouter ou retirer les chemins @ta (Y/N)
    rl.question(
      'Voulez-vous ajouter les chemins @ta du répertoire courant dans celui du partenaire (Y/N) ? (par défaut, Y) : ',
      action => {
        const isAdd = action === '' || action.toLowerCase() === 'y';

        if (isAdd) {
          // Ajouter les chemins @ta du répertoire courant dans le tsconfig du répertoire distant
          taPaths.forEach(key => {
            if (tsconfig.compilerOptions.paths[key]) {
              // Fusionner les chemins existants dans le répertoire distant
              tsconfig.compilerOptions.paths[key] = [
                ...new Set([...tsconfig.compilerOptions.paths[key], ...currentPaths[key]]),
              ];
            } else {
              // Ajouter un nouveau chemin si ce n'est pas déjà présent
              tsconfig.compilerOptions.paths[key] = currentPaths[key];
            }
            console.log(`Chemin ajouté pour ${key}: ${tsconfig.compilerOptions.paths[key]}`);
          });
          console.log('Les chemins @ta ont été ajoutés au tsconfig du partenaire.');
        } else {
          // Retirer les chemins @ta du tsconfig du répertoire distant
          taPaths.forEach(key => {
            delete tsconfig.compilerOptions.paths[key];
            console.log(`Chemin retiré pour ${key}`);
          });
          console.log('Les chemins @ta ont été retirés du tsconfig du partenaire.');
        }

        // Sauvegarder le tsconfig.json du répertoire distant modifié
        try {
          fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
          console.log(`Le fichier tsconfig.json du partenaire a été mis à jour avec les changements.`);
        } catch (error) {
          console.error("Erreur lors de l'écriture du fichier tsconfig.json:", error);
        }

        rl.close();
      }
    );
  } else {
    console.log('Choix invalide.');
    rl.close();
  }
});
