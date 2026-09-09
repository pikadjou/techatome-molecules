import { expect, Page, test } from "@playwright/test";

/**
 * La page `/catalogue` monte les planches de la direction visuelle retenue avec
 * les vrais composants @ta. Les assertions portent sur les valeurs calculées :
 * c'est la seule façon de prouver que les jetons `--ta-components-*` arrivent
 * bien jusqu'au rendu, et pas seulement qu'ils sont déclarés.
 */

const ACCENT = "rgb(242, 195, 23)"; // second-400
const NAVY = "rgb(18, 30, 56)"; // brand-900
const RED_DARK = "rgb(169, 50, 38)"; // semantic red-dark

/**
 * `pseudo` est passé séparément : `querySelector` ne sait pas viser un
 * pseudo-élément, seul `getComputedStyle` le peut, via son second argument.
 */
function computed(
  page: Page,
  selector: string,
  property: string,
  pseudo: string | null = null
): Promise<string> {
  return page.evaluate(
    ([sel, prop, pseudoEl]) => {
      const el = document.querySelector(sel!);
      if (!el) {
        throw new Error(`Sélecteur introuvable : ${sel}`);
      }
      return getComputedStyle(el, pseudoEl).getPropertyValue(prop!);
    },
    [selector, property, pseudo] as [string, string, string | null]
  );
}

test("les sept planches du catalogue sont montées", async ({ page }) => {
  await page.goto("/catalogue");

  await expect(page.getByTestId("planche")).toHaveCount(7);
  await expect(page.locator("#boutons")).toBeVisible();
  await expect(page.locator("#mobile")).toBeVisible();
});

test("les quatre types de bouton portent chacun leur teinte", async ({
  page,
}) => {
  await page.goto("/catalogue");

  // Accent : jaune plein, encre navy.
  expect(
    await computed(
      page,
      '[data-testid="btn-secondary"] .button',
      "background-color"
    )
  ).toBe(ACCENT);
  expect(
    await computed(page, '[data-testid="btn-secondary"] .button', "color")
  ).toBe(NAVY);

  // Navy : plein, texte blanc.
  expect(
    await computed(
      page,
      '[data-testid="btn-primary"] .button',
      "background-color"
    )
  ).toBe(NAVY);

  // Outline : fond transparent, contour navy.
  expect(
    await computed(
      page,
      '[data-testid="btn-tertiary"] .button',
      "border-bottom-color"
    )
  ).toBe(NAVY);

  // Danger : contour rouge sombre — variante absente du SCSS avant cette page.
  expect(
    await computed(page, '[data-testid="btn-danger"] .button', "color")
  ).toBe(RED_DARK);
  expect(
    await computed(
      page,
      '[data-testid="btn-danger"] .button',
      "border-bottom-color"
    )
  ).toBe(RED_DARK);
});

test("les boutons partagent le rayon rounded (10px)", async ({ page }) => {
  await page.goto("/catalogue");

  for (const type of ["primary", "secondary", "tertiary", "danger"]) {
    expect(
      await computed(
        page,
        `[data-testid="btn-${type}"] .button`,
        "border-radius"
      )
    ).toBe("10px");
  }
});

test("les champs sont remplis et soulignés, sans contour", async ({ page }) => {
  await page.goto("/catalogue");

  const field = "#champs .form-control";

  // Le trait bas de 2px porte l'état ; les trois autres bords sont supprimés.
  expect(await computed(page, field, "border-bottom-width")).toBe("2px");
  expect(await computed(page, field, "border-top-width")).toBe("0px");
  expect(await computed(page, field, "border-left-width")).toBe("0px");

  // Le rayon ne touche que les deux coins hauts.
  expect(await computed(page, field, "border-top-left-radius")).toBe("10px");
  expect(await computed(page, field, "border-bottom-left-radius")).toBe("0px");
});

test("l'interrupteur garde sa piste arrondie et sa pastille jaune une fois activé", async ({
  page,
}) => {
  await page.goto("/catalogue");

  const track = "#selection .toggle-switch input:checked + .slider";

  expect(await computed(page, track, "background-color")).toBe(NAVY);
  expect(await computed(page, track, "border-radius")).toBe("40px");
  expect(await computed(page, track, "background-color", "::before")).toBe(
    ACCENT
  );
});

test("l'élément courant de la liste porte le filet jaune", async ({ page }) => {
  await page.goto("/catalogue");

  const current = "#cards .list-element.highlight";

  expect(await computed(page, current, "border-left-width")).toBe("4px");
  expect(await computed(page, current, "border-left-color")).toBe(ACCENT);
});
