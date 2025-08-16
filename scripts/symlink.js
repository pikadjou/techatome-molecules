import fs from "fs-extra";
import readline from "readline";

import { appConfig } from "./app.config.js";

(async () => {
  try {
    // Récupère les noms de partenaires depuis la configuration
    const siteNames = Object.keys(appConfig);
    if (siteNames.length === 0) {
      console.error("Aucun partenaire n'est configuré dans app.config.js.");
      process.exit(1);
    }

    console.log(
      "Veuillez sélectionner le partenaire pour lequel vous souhaitez créer le symlink :"
    );
    siteNames.forEach((site, index) => {
      console.log(`${index + 1} : ${site}`);
    });

    // Création de l'interface de lecture pour le prompt
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // On attend la réponse de l'utilisateur
    const answer = await new Promise((resolve) => {
      rl.question("Entrez le numéro du partenaire : ", resolve);
    });

    rl.close();

    const index = parseInt(answer, 10) - 1;
    if (isNaN(index) || index < 0 || index >= siteNames.length) {
      console.error("Sélection de partenaire invalide.");
      process.exit(1);
    }

    const selectedSite = siteNames[index];
    const appPath = appConfig[selectedSite];

    await fs.ensureSymlink("projects", `${appPath}\\projects`, "dir");
    console.log(
      `Symlink créé pour le partenaire "${selectedSite}" : projects -> ${appPath}\\projects`
    );

    await fs.ensureSymlink("scripts\\app", `${appPath}\\scripts`, "dir");
    console.log(
      `Symlink créé pour le partenaire "${selectedSite}" : scripts/app -> ${appPath}\\scripts`
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
