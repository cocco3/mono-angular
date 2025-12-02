import { buildThemesCss } from './styles/buildThemesCss';
import { buildIcons } from './svgs/buildIcons';

async function main() {
  await buildThemesCss();
  buildIcons();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
