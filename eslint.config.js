import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactPlugin from "@eslint-react/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommendedTypeChecked,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
			reactPlugin.configs["recommended-typescript"],
		],
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"no-console": "warn",
			"@typescript-eslint/consistent-type-imports": "error",
		},
	},
	eslintConfigPrettier,
]);
