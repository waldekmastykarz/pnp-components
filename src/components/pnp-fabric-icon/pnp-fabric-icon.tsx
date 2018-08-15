import { Component, Prop } from '@stencil/core';
import { icons } from './Icons';

@Component({
  tag: 'pnp-fabric-icon',
  styleUrl: 'pnp-fabric-icon.scss',
  shadow: true
})
export class PnpFabricIcon {
  @Prop() name: string;

  render() {
    if (!this.name) {
      return;
    }

    const icon = icons.find(i => i.name === this.name);
    if (!icon) {
      console.error(`No icon with name ${this.name} found. See https://developer.microsoft.com/en-us/fabric#/styles/icons for available icons`);
      return;
    }

    return (
      <i>{String.fromCharCode(parseInt(icon.unicode, 16))}</i>
    );
  }
}
