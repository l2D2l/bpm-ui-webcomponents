import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

const jest = ['ui-bpm-text.spec.ts'];
const weight = (prop = 'normal') => select('weight', ['book', 'normal', 'medium', 'semibold', 'bold'], prop);
const color = (prop = 'black') => select('color', ['dark-gray-200', 'black', 'blue-900', 'white'], prop);
const size = (prop = 'base') =>
  select('size', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle', 'base', 'small', 'tiny'], prop);

storiesOf('Atoms|text', module).add(
  'Default',
  () => `<ui-bpm-text weight='${weight()}' color='${color()}' size='${size()}'>XDigital</ui-bpm-text>`,
  { jest },
);