import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

const weight = (prop = 'normal') => select('weight', ['thin', 'normal', 'bold'], prop);

storiesOf('Atoms|text', module)
  .add('Default', () => `<ui-text>Bienvenido!</ui-text>`)
  .add('Weight', () => `<ui-text weight='${weight()}'>Bienvenido!</ui-text>`);
