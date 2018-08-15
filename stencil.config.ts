import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'pnp-components',
  bundles: [
    { components: ['pnp-fabric-icon'] },
    { components: ['pnp-fabric-button'] },
    { components: ['pnp-spfx-placeholder'] }
  ],
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  copy: [
    { src: 'demo' }
  ],
  plugins: [
    sass()
  ]
};
