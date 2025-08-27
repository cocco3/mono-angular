import { buildThemesCss } from './styles/buildThemesCss';
import { buildIcons } from './svgs/buildIcons';

async function run() {
  await buildThemesCss();
  buildIcons();
}

run();
