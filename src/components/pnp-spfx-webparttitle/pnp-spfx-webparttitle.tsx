import { Component, Prop, Event, EventEmitter } from '@stencil/core';
// import { DisplayMode } from '@microsoft/sp-core-library';

export enum DisplayMode {
  Read = 1,
  Edit = 2,
}

@Component({
  tag: 'pnp-spfx-webparttitle',
  styleUrl: 'pnp-spfx-webparttitle.scss',
  shadow: true
})
export class PnpSpfxWebparttitle {

  @Prop({ mutable: true }) wpTitle: string;
  @Prop() displayMode: DisplayMode;
  @Prop() className: string;
  @Event() updateProperty: EventEmitter;
  // @Prop() updateProperty: (val: string) => void;

  private onChange = (event) => {
    this.wpTitle = event.target.value;
    this.updateProperty.emit(this.wpTitle);
  }

  // private onChange = (event) => {
  //   this.wpTitle = event.target.value;
  //   if (this.updateProperty) {
  //     this.updateProperty(this.wpTitle);
  //   } else {
  //     console.log("No function provided");
  //   }
  // }

  public render() {
    if (this.wpTitle || this.displayMode === DisplayMode.Edit) {
      return (
        <div class={`.webPartTitle ${this.className ? this.className : ''}` }>
          {
            this.displayMode === DisplayMode.Edit && (
              <textarea placeholder={"Web Part Title"}
                        aria-label={"Web Part Title"}
                        onInput={this.onChange}
                        value={this.wpTitle}></textarea>
            )
          }
          {
            this.displayMode !== DisplayMode.Edit && this.wpTitle && <span>{this.wpTitle}</span>
          }
        </div>
      );
    }
    return null;
  }
}
