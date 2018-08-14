import { Component, State, Listen } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {

  @State() wpTitle: string = "Web Part Title";

  @Listen('updateProperty')
  private updateProperty(ev: CustomEvent) {
    this.wpTitle = ev.detail;
  }

  // @Listen('updateProperty')
  // private updateProperty(val) {
  //   this.wpTitle = val;
  // }

  render() {
    return (
      <div>
        <pnp-spfx-webparttitle wp-title={this.wpTitle} display-mode="1"></pnp-spfx-webparttitle>
        {/* <pnp-spfx-webparttitle wp-title={this.wpTitle} display-mode="2" updateProperty={this.updateProperty} ></pnp-spfx-webparttitle> */}
        <pnp-spfx-webparttitle wp-title={this.wpTitle} display-mode="2" onUpdateProperty={ev => this.updateProperty(ev)} ></pnp-spfx-webparttitle>
        <pnp-spfx-webparttitle wp-title="" display-mode="2" ></pnp-spfx-webparttitle>
      </div>
    );
  }
}
