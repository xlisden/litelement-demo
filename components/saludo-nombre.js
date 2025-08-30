import { LitElement, html } from "lit";

export class SaludoNombre extends LitElement {
    static properties = {
        nombre: { type: String }
    }

    render() {
        return html`
            <p>Bienvenido de nuevo, <strong>${this.nombre}</strong></p>
        `;
    }
}

customElements.define('saludo-nombre', SaludoNombre);