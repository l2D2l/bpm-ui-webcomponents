// import { Config } from '@stencil/core';

// export const config: Config = {
//   namespace: 'bpm-ui-webcomponents',
//   outputTargets: [
//     {
//       type: 'dist',
//       esmLoaderPath: '../loader',
//     },
//     {
//       type: 'dist-custom-elements-bundle',
//     },
//     {
//       type: 'docs-readme',
//     },
//     {
//       type: 'www',
//       serviceWorker: null, // disable service workers
//     },
//   ],
// };

import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export const config: Config = {
  namespace: 'bpm-ui-webcomponents',
  preamble: 'Pichincha | Build-Date: ${new Date()}',
  devServer: {
    openBrowser: false,
    port: 3000,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  taskQueue: 'async',
  plugins: [
    sass(),
    postcss({
      plugins: [
        autoprefixer({
        cascade: false,
        }),
        tailwindcss('./tailwind.config.js'),
      ],
    }),
  ],
  globalStyle: 'src/global/styles/styles.scss',
};