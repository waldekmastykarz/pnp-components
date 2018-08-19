import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'pnp-fabric-checkbox',
    styleUrl: 'pnp-fabric-checkbox.scss',
    shadow: true
})
export class PnpFabricCheckbox {
    /**
     * Label to display next to the checkbox.
    */
    @Prop() label: string;

    /**
     * Checked state
     */
    @Prop({mutable: true}) checked: boolean = false;

    /**
     * Enabled state
     */
    @Prop() disabled: boolean = false;

    @Event() onClick: EventEmitter<boolean>;

    private changeCheckedState(): void {
        if(this.disabled) return;

        this.checked = !this.checked;
        this.onClick.emit(this.checked);
    }

    render() {
        let checkBoxClasses = 'ms-Checkbox';
        checkBoxClasses = this.checked ? checkBoxClasses += ' is-checked' : checkBoxClasses;
        checkBoxClasses = this.disabled ? checkBoxClasses += ' is-disabled' : checkBoxClasses += ' is-enabled';

        return (
            <button disabled={this.disabled} role="checkbox" type="button" class={checkBoxClasses} onClick={this.changeCheckedState.bind(this)}>
                <label class="ms-Checkbox-label">
                    <div class="ms-Checkbox-checkbox">
                        <pnp-fabric-icon name="CheckMark"></pnp-fabric-icon>
                    </div>
                    <span class="ms-Checkbox-text">{this.label}</span>
                </label>
            </button>
        )
    }
}