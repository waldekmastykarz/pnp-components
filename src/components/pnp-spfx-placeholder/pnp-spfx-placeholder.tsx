import { Component, Prop, Event, EventEmitter, Element, State } from '@stencil/core';

@Component({
  tag: 'pnp-spfx-placeholder',
  styleUrl: 'pnp-spfx-placeholder.scss',
  shadow: true
})
export class PnpSpfxPlaceholder {
  /**
   * Text description for the placeholder. Appears bellow the Icon and IconText.
   */
  @Prop() description: string;
  /**
   * Icon name used for the className from the MDL2 set. Example: 'Add'.
   */
  @Prop() iconName: string;
  /**
   * Heading displayed against the Icon.
   */
  @Prop() iconText: string;
  /**
   * Text label to be displayed on button below the description.
   * Optional: As the button is optional.
   */
  @Prop() buttonLabel?: string;
  /**
   * onConfigure handler for the button.
   * Optional: As the button is optional.
   */
  @Event() configure: EventEmitter;
  @State() width: number;
  @Element() private el: HTMLElement;

  private click = () => {
    this.configure.emit();
  }

  componentDidLoad() {
    this.setZoneWidth();
  }

  componentDidUpdate() {
    this.setZoneWidth();
  }

  private setZoneWidth(): void {
    this.width = this.el.clientWidth;
  }

  render() {
    return (
      <div class="placeholder">
        <div class="container">
          <div class="head">
            <div class="headContainer">
              {
                this.iconName && <pnp-fabric-icon name={this.iconName} class="icon" />
              }
              <span class={`text ${(this.width && this.width <= 380) ? ' hide' : '' }`}>{this.iconText}</span>
            </div>
          </div>
          <div class="description">
            <span class="descriptionText">{this.description}</span>
          </div>
          <slot />
          <div class="description">
            {
              this.buttonLabel &&
              <pnp-fabric-button
                text={this.buttonLabel}
                title={this.description}
                onClick={this.click}
                primary />
            }
          </div>
        </div>
      </div>
    );
  }
}
