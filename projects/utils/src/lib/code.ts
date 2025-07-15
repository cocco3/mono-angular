import * as prettier from 'prettier/standalone';
import * as prettierPluginHtml from 'prettier/plugins/html';

/**
 * Format Angular code in the browser using prettier's standalone build.
 * @see https://prettier.io/docs/browser
 */
export async function formatAngularCode(code: string) {
  return await prettier.format(code, {
    parser: 'angular',
    plugins: [prettierPluginHtml],
  });
}
