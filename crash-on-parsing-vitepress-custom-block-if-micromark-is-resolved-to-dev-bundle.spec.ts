import fs from 'node:fs/promises';
import path from 'node:path';
import {ESLint} from 'eslint';
import eslintPluginMarkdownPreferences from 'eslint-plugin-markdown-preferences';
import {it, expect} from 'vitest';

const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: [
    {
      plugins: {
        'markdown-preferences': eslintPluginMarkdownPreferences,
      },
      language: 'markdown-preferences/extended-syntax',
      files: ['**/*.md'],
      rules: {
        'markdown-preferences/custom-container-marker-spacing': 2,
      },
    },
  ],
});

const lintResult = await eslint.lintText(
  await fs.readFile(
    path.join(
      import.meta.dirname,
      'src/issues/crash-on-parsing-vitepress-custom-block-if-micromark-is-resolved-to-dev-bundle.md',
    ),
    'utf8',
  ),
  {
    filePath: 'foo.md',
  },
);

console.dir(lintResult, {maxArrayLength: null, depth: 4});

it('foo', () => {
  expect(true).toBe(true);
});
