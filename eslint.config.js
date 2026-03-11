import eslintPluginMarkdownPreferences from 'eslint-plugin-markdown-preferences';
import {defineConfig} from 'eslint/config';

export default defineConfig([
  {
    plugins: {
      'markdown-preferences': eslintPluginMarkdownPreferences,
    },
    language: 'markdown-preferences/extended-syntax',
    files: ['**/*.md'],
  },
  {
    files: [
      'src/issues/crash-on-parsing-vitepress-custom-block-if-micromark-is-resolved-to-dev-bundle.md',
    ],
    rules: {
      'markdown-preferences/custom-container-marker-spacing': 2,
    },
  },
  {
    files: ['src/issues/crash-on-escaped-or-enclosed-in-quotes-urls-or-emails.md'],
    rules: {
      'markdown-preferences/link-destination-style': 2,
    },
  },
  {
    files: ['src/issues/heading-casing-crash-if-heading-includes-sub-phrase-of-preserved-word.md'],
    rules: {
      'markdown-preferences/heading-casing': 2,
    },
  },
  {
    files: ['src/issues/prefer-link-reference-definitions-autofix-removes-images.md'],
    rules: {
      'markdown-preferences/prefer-link-reference-definitions': 2,
    },
  },
  {
    files: ['src/issues/heading-casing-suggests-replacing-i-in-sentence-case.md'],
    rules: {
      'markdown-preferences/heading-casing': [
        2,
        {
          style: 'Sentence case',
        },
      ],
      'markdown-preferences/table-header-casing': [
        2,
        {
          style: 'Sentence case',
        },
      ],
    },
  },
  {
    files: [
      'src/issues/padding-line-between-blocks-disallows-comments-directly-above-blocks.md',
      'src/issues/padding-line-between-blocks-disallows-comments-should-not-require-empty-line-between-block-and-closing-html-tag.md',
    ],
    rules: {
      'markdown-preferences/padding-line-between-blocks': 2,
      'markdown-preferences/prefer-link-reference-definitions': 2,
    },
  },
]);
