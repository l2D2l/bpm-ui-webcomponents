import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

const jest = ['ui-bpm-icon.spec.ts'];

const name = (prop = 'help') =>
  select(
    'name',
    [
      'star',
      'loader',
      'credit_card',
      'currency',
      'check',
      'arrows',
      'fingerprint',
      'findpage',
      'visibility',
      'download',
      'trendingup',
      'mail',
      'arrow_down',
      'arrow_up',
      'arrow_back',
      'arrow_next',
      'cheveron_down',
      'cheveron_up',
      'cheveron_back',
      'cheveron_next',
      'arrow_direct_down',
      'arrow_direct_up',
      'arrow_direct_back',
      'arrow_direct_next',
    ],

    prop,
  );

storiesOf('Atoms|icon', module).add('Default', () => `<ui-bpm-icon name='${name()}'></ui-bpm-icon>`, {
  jest,
});