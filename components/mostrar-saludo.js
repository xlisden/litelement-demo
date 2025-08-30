import { LitElement, html } from "lit";
import './saludo-nombre.js'

export class MostrarSaludo extends LitElement {
    usuario = "woladsa";

    render() {
        return html`
            <div>
                <h2>Este es un saludo personalizado</h2>
                <saludo-nombre .nombre=${this.usuario}></saludo-nombre>
            </div>
        `;
    }
}

customElements.define('mostrar-saludo', MostrarSaludo);