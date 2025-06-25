import { useContext } from 'react';
import { DocsContext, Source } from '@storybook/blocks';
import pkg from '../../package.json';

export const ImportPath = () => {
  const context = useContext(DocsContext);
  const componentName = context.componentStories()[0].component?.name;
  const path = `import { ${componentName} } from '${pkg.name}'`;

  return <Source language="typescript" code={path} />;
};

export default ImportPath;
