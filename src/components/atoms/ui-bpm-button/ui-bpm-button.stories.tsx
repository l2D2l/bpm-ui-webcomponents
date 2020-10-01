import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

const label = (prop = 'Ejemplo!') => text('label', prop);
const type = (prop = 'primary') => select('type', ['base', 'primary', 'secondary', 'complementary', 'tertiary', 'text'], prop);
const size = (prop = 'md') => select('size', ['sm', 'md', 'lg', 'xl'], prop);
const disabled = (prop = 'false') => select('disabled', ['true', 'false'], prop);
const isLoading = (prop = 'false') => select('isLoading', ['true', 'false'], prop);
const iconPosition = (prop = 'right') => select('type', ['right', 'left'], prop);
const icon = (prop = 'help') =>
  select(
    'icon-name',
    ['help', 'cog', 'cheveron_right', 'cheveron_left', 'cheveron_up', 'cheveron_down', 'star'],
    prop,
  );
const jest = ['ui-bpm-button.spec.ts'];

storiesOf('Atoms|button', module)
  .add(
    'Default',
    () =>
    `<ui-bpm-button label='${label()}' type='${type()}' size='${size()}' disabled="${disabled()}" is-loading="${isLoading()}"></ui-bpm-button>`,
    { jest },
  )
  .add(
    'Button with icon',
    () => `<ui-bpm-button label='${label()}' icon-name='${icon()}' icon-position='${iconPosition()}'></ui-bpm-button>`,
    { jest },
  );