import { LitElement, html } from "lit";
import './saludo-nombre.js'

export class MostrarSaludo extends LitElement {
    usuario = "nombre desde el padre pasado con output-javascript?";

    render() {
        return html`
            <div>
                <saludo-nombre .nombre=${this.usuario}></saludo-nombre>
            </div>
        `;
    }
}

customElements.define('mostrar-saludo', MostrarSaludo);