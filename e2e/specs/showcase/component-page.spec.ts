import { expect, test } from "@playwright/test";

test.describe("Page composant générique", () => {
  test("ta-button : quatre exemples, ligne d'import, API lue depuis la source", async ({ page }) => {
    await page.goto("/ui/ta-button");

    await expect(page.getByTestId("import-line")).toContainText(
      'import { ButtonComponent } from "@ta/ui";'
    );
    await expect(page.getByTestId("example-block")).toHaveCount(4);

    // Le premier exemple rend bien les quatre types côte à côte.
    const firstRender = page.getByTestId("example-render").first();
    await expect(firstRender.locator("ta-button")).toHaveCount(4);

    // L'API vient du parseur, pas d'un tableau écrit à la main.
    const typeRow = page.getByTestId("api-row-type");
    await expect(typeRow).toContainText('"primary" | "secondary" | "tertiary" | "danger"');
    await expect(typeRow).toContainText('"primary"');
    await expect(page.getByTestId("api-row-action")).toBeVisible();
  });

  test("le code affiché est le template qui s'exécute", async ({ page }) => {
    await page.goto("/ui/ta-button");

    const firstBlock = page.getByTestId("example-block").first();
    await expect(firstBlock.getByTestId("example-source")).toBeHidden();

    await firstBlock.getByTestId("toggle-source").click();

    await expect(firstBlock.getByTestId("example-source")).toContainText(
      '<ta-button type="primary">Primary</ta-button>'
    );
  });

  test("ta-card : la projection de contenu est rendue", async ({ page }) => {
    await page.goto("/ui/ta-card");

    await expect(page.getByTestId("example-block")).toHaveCount(3);
    await expect(page.locator("ta-card-title").first()).toContainText("Titre de la carte");
  });

  test("ta-input-textbox : alias résolu et membres hérités séparés", async ({ page }) => {
    await page.goto("/form-input/ta-input-textbox");

    // `inputModel` est déclaré sur `TaAbstractInputComponent`, pas sur `TextBoxComponent` :
    // c'est donc un membre hérité, replié par défaut avec les autres.
    await expect(page.getByTestId("api-inherited")).toBeHidden();
    await expect(page.getByTestId("api-row-input")).toHaveCount(0);

    await page.getByTestId("toggle-inherited").click();

    await expect(page.getByTestId("api-inherited")).toContainText("TaAbstractInputComponent");

    // `inputModel` est exposé sous l'alias `input` : c'est ce nom qui compte.
    const inputRow = page.getByTestId("api-row-input");
    await expect(inputRow).toBeVisible();
    await expect(inputRow).toContainText("requis");
  });

  test("les notes d'une démo sont rendues", async ({ page }) => {
    await page.goto("/form-input/ta-input-textbox");

    // `ta-input-textbox` porte des notes ; sans elles la section n'existe pas.
    await expect(page.getByTestId("component-notes")).toContainText("ta-form");
  });

  test("le bouton de copie confirme son action", async ({ page, context }) => {
    // Sans cette permission, l'écriture dans le presse-papiers échoue et le
    // bouton afficherait « Échec de la copie » — ce qui serait aussi un résultat
    // valide du point de vue de la machine à états, mais pas celui qu'on teste.
    await context.grantPermissions(["clipboard-write"]);
    await page.goto("/ui/ta-button");

    const block = page.getByTestId("example-block").first();
    await expect(block.getByTestId("copy-source")).toHaveText("Copier");

    await block.getByTestId("copy-source").click();

    await expect(block.getByTestId("copy-source")).toHaveText("Copié");
  });

  test("un échec de copie est annoncé", async ({ page }) => {
    // On force le rejet plutôt que de compter sur le modèle de permissions du
    // navigateur : ce test doit exercer le chemin d'erreur de l'application,
    // pas celui de Chromium.
    await page.addInitScript(() => {
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: () => Promise.reject(new Error("refus simulé")) },
      });
    });
    await page.goto("/ui/ta-button");

    const button = page.getByTestId("example-block").first().getByTestId("copy-source");
    await button.click();

    await expect(button).toHaveText("Échec de la copie");
  });

  test("un échec survenu juste après un succès reste affiché", async ({ page }) => {
    // Le premier appel réussit, les suivants échouent. Sans annulation de la
    // minuterie, le retour au repos programmé par le succès à 1500 ms viendrait
    // effacer le message d'échec — le message le plus important deviendrait le
    // plus fugace. C'est exactement ce que `clearTimeout` empêche.
    await page.addInitScript(() => {
      let first = true;
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: {
          writeText: () => {
            if (first) {
              first = false;
              return Promise.resolve();
            }
            return Promise.reject(new Error("refus simulé"));
          },
        },
      });
    });
    await page.goto("/ui/ta-button");

    const button = page.getByTestId("example-block").first().getByTestId("copy-source");

    await button.click();
    // Cette assertion garantit qu'on est encore dans la fenêtre de 1500 ms.
    await expect(button).toHaveText("Copié");

    await button.click();
    await expect(button).toHaveText("Échec de la copie");

    // Attente délibérée : c'est l'écoulement du temps qui est sous test. La
    // minuterie du succès aurait expiré ici si elle n'avait pas été annulée.
    await page.waitForTimeout(2000);
    await expect(button).toHaveText("Échec de la copie");
  });

  test("une paire paquet/composant inconnue du registre retombe sur l'accueil", async ({ page }) => {
    // Les pages thématiques héritées (`/ui/basics` et consorts) ont été retirées
    // (tâche 17) : `canMatchComponentPage` doit maintenant laisser passer toute
    // paire à deux segments qui n'est pas dans le registre jusqu'au joker final,
    // qui redirige vers l'accueil plutôt que d'afficher une page composant vide.
    await page.goto("/ui/ne-existe-pas");

    await expect(page).toHaveURL(/\/home$/);
  });

  test("un composant non montable affiche son explication et son usage", async ({ page }) => {
    await page.goto("/core/ta-google-maps");

    await expect(page.getByTestId("not-renderable")).toContainText("Google Maps");
    await expect(page.getByTestId("example-block")).toHaveCount(0);
    // Le tableau d'API reste rendu : c'est ce que la page promet au lecteur.
    await expect(page.getByTestId("api-table")).toBeVisible();
  });
});
