import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'pnp-components',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  plugins: [
    sass()
  ],
  // rollupConfig: {
  //   outputOptions: {
  //     globals: {
  //       '@microsoft/sp-http': '@microsoft/sp-http'
  //     }
  //   }
  // }
  nodeResolve: {
    browser: true
  }
};
