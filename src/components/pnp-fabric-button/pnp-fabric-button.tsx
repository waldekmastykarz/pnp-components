import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pnp-fabric-button',
  styleUrl: 'pnp-fabric-button.scss',
  shadow: true
})
export class PnpFabricButton {
  @Prop() primary?: boolean;
  @Prop() href?: string;
  @Prop() disabled?: boolean;
  @Prop() text?: string;

  render() {
    const Tag = this.href ? 'a' : 'button';
    const props = {
      href: this.href,
      class: `button${(this.primary ? ' primary' : '')}${(this.disabled ? ' disabled' : '')}`,
      disabled: this.disabled
    };
    return (
      <Tag {...props}>
        <div class="flexContainer">
          <div class="textContainer">
            <div class="label">{this.text}</div>
          </div>
        </div>
      </Tag>
    );
  }
}
