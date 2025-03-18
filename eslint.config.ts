import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    rules: {
      'camelcase': 'error',
      'comma-dangle': ['error', 'always-multiline'], // Enforce trailing commas in multiline
      'curly': ['error', 'all'], // Require curly braces for all control statements
      'no-console': 'warn', // Warn about console.log usage
    },
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
  eslintConfigPrettier
);
