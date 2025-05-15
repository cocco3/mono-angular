import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/blocks';

import { ImportPath } from './ImportPath';

/**
 * https://storybook.js.org/docs/writing-docs/autodocs#write-a-custom-template
 */
export const DocsLayout = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <ImportPath />
    <Primary />
    <Controls />
    <Stories />
  </>
);
