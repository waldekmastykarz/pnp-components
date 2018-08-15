import { Component, Prop, Event, EventEmitter, Element } from '@stencil/core';
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
  @Event() updateProperty: EventEmitter<string>;
  // more like native HTML, contents are passed to eval(),
  // not passing event object to handler
  // event data must be retrieved from the object, eg. <el onupdateproperty="myFunc(this.wpTitle)"></el>
  @Prop() onupdateproperty: string;
  // accepts only function name. Function is executed passing the event object
  // as argument, eg. <el onupdatepropertyshort="myFunc"></el>
  @Prop() onupdatepropertyshort: string;
  @Element() private el: HTMLElement;
  // @Prop() updateProperty: (val: string) => void;

  public componentWillLoad() {
    if (this.onupdateproperty) {
      this.el.addEventListener('updateProperty', (e) => { eval(this.onupdateproperty); });
    }

    if (this.onupdatepropertyshort && window[this.onupdatepropertyshort]) {
      this.el.addEventListener('updateProperty', (e) => { window[this.onupdatepropertyshort](e); });
    }
  }

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
        <div class={`webPartTitle ${this.className ? this.className : ''}`}>
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
