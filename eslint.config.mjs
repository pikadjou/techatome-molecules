import eslintConfig from "./projects/config/eslint-config/index.mjs";

export default [...eslintConfig, { ignores: ["src/app/showcase/generated/**"] }];
