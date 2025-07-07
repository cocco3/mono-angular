import * as prettier from 'prettier/standalone';
import * as prettierPluginHtml from 'prettier/plugins/html';

export async function formatCode(code: string) {
  return await prettier.format(code, {
    parser: 'angular',
    plugins: [prettierPluginHtml],
  });
}
