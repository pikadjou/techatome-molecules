import eslintConfig from "./projects/config/eslint-config/index.mjs";

// La config partagée vise les applications (préfixe app, sort-keys). Ici : libs @ta, préfixe ta, pas de tri des clés.
export default [
  ...eslintConfig,
  {
    files: ["**/*.ts"],
    rules: {
      "@angular-eslint/prefer-standalone": "error",
      "@angular-eslint/use-injectable-provided-in": "warn",
      "no-console": "error",
      "sort-keys": "off",
      // Le dépôt n'a pas encore été reformaté avec Prettier 3 (`yarn prettier`, commit dédié) : en avertissement d'ici là.
      "prettier/prettier": "warn",
    },
  },
  {
    files: ["projects/**/*.ts"],
    rules: {
      "@angular-eslint/component-selector": ["error", { type: "element", prefix: "ta", style: "kebab-case" }],
      "@angular-eslint/directive-selector": ["warn", { type: "attribute", prefix: ["ta", "app"], style: "camelCase" }],
    },
  },
  {
    // Vitrine et harnais e2e : composants d'exemple (`*Example`, `*Case`) qui journalisent volontairement.
    files: ["src/app/showcase/**/*.ts", "src/app/e2e-harness/**/*.ts"],
    rules: {
      "@angular-eslint/component-class-suffix": ["error", { suffixes: ["Page", "Component", "Modal", "Example", "Case"] }],
      "no-console": "warn",
    },
  },
  {
    files: ["**/*.html"],
    rules: {
      "@angular-eslint/template/prefer-control-flow": "error",
    },
  },
  {
    // Hôtes de test, journalisation volontaire : outillage, pas du code livré.
    files: ["tests/**", "e2e/**", "scripts/**", "**/*.stories.ts", "projects/testing/**", "projects/server/src/lib/services/logger.ts", "src/main.ts"],
    rules: {
      "@angular-eslint/component-class-suffix": "off",
      "@angular-eslint/component-selector": "off",
      "no-console": "off",
    },
  },
  { ignores: ["src/app/showcase/generated/**", "projects/**/.build/**", "projects/**/dist/**"] },
];
