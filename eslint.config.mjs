import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import prettier from 'eslint-plugin-prettier';

export default defineConfigWithVueTs(pluginVue.configs['flat/essential'], vueTsConfigs.recommendedTypeChecked, {
  plugins: {
    prettier
  },
  rules: {
    'prettier/prettier': 'error'
  },
  ignores: ['dist', 'coverage', 'node_modules']
});
