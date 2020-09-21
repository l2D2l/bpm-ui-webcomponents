import { addParameters, configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withActions, configureActions } from '@storybook/addon-actions';
import { withLinks } from '@storybook/addon-links';
import { withTests } from '@storybook/addon-jest';
// import results from "../jest-test-results.json";

const newViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1200px',
      height: '1024px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1366px',
      height: '1024px',
    },
  },
};
addParameters({
  viewport: {
    viewports: newViewports,
    //defaultViewport: 'mobile',
  },
});

addParameters({
  options: {
    panelPosition: 'bottom',
  },

  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'light', value: '#eeeeee' },
    { name: 'gainsboro', value: '#DCDCDC' },
    { name: 'lightgrey', value: '#D3D3D3' },
    { name: 'silver', value: '#C0C0C0' },
    { name: 'darkgrey', value: '#A9A9A9' },
    { name: 'grey', value: '#808080' },
    { name: 'dimgrey', value: '#696969' },
    { name: 'lightslategrey', value: '#778899' },
    { name: 'slategrey', value: '#708090' },
    { name: 'darkslategrey', value: '#2F4F4F' },
    { name: 'dark', value: '#555555' },
    { name: 'black', value: '#000000' },
  ],
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withLinks);
addDecorator(withActions('click'));
// addDecorator(
//   withTests({
//     results,
//     filesExt: '.spec.ts',
//   }),
// );

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});

const loader = require('../loader/index.cjs.js');
const local_stories = require.context(
  '../src/components',
  true,
  /\/[^/ ]+?\/.+\/.+\.stories\.tsx$/,
);

const loadStories = () => {
  loader.defineCustomElements(window);
  local_stories.keys().forEach((filename) => local_stories(filename));
};

configure(loadStories, module);
