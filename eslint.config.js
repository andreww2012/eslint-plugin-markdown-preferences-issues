import eslintPluginMarkdownPreferences from 'eslint-plugin-markdown-preferences';
import {defineConfig} from 'eslint/config';

export default defineConfig([
  {
    plugins: {
      'markdown-preferences': eslintPluginMarkdownPreferences,
    },
    language: 'markdown-preferences/extended-syntax',
    files: ['**/*.md'],
    rules: {},
  },
]);
