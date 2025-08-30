import { LitElement, html } from "lit";

export class InputPlaceholder extends LitElement {
    static properties = {
        placeholder: { type: String }
    }

    constructor() {
        super();
        this.placeholder = 'placeholder inicial';
        console.log(`InputPlaceholder`);
    }

    render() {
        return html`
            <input placeholder="${this.placeholder}" />
        `
    }
}

customElements.define('input-placeholder', InputPlaceholder);