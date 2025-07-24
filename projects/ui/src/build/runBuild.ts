import { buildThemeCss } from './styles/buildThemeCss';
import { buildTypographyCss } from './styles/buildTypographyCss';
import { buildIcons } from './svgs/buildIcons';

async function run() {
  await buildThemeCss();
  await buildTypographyCss();
  buildIcons();
}

run();
