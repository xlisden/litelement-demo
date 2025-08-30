import { LitElement, html, css } from "lit";
import './input-nombre.js'
import './titulo-h1.js'
import './input-placeholder.js'

export class MostrarNombreCambiante extends LitElement {
    static properties = {
        nombreActual: { type: String }
    }

    static styles = css`
        :host{
            display: block;
            border: solid red 1px;
            padding-bottom: 1rem;
            padding-left: 1rem;
        }
    `;

    placeholder = 'placeholder desde el padre';

    constructor() {
        super();
        this.nombreActual = 'nombre inicial';
        console.log(`MostrarNombreCambiante`);
    }

    handleCambiarNombre(evento) {
        console.log(`evento => ${evento}`);
        this.nombreActual = evento.detail;
    }

    render() {
        return html`
            <titulo-h1 texto="Padre-Hijo"></titulo-h1>
            <input-placeholder .placeholder="${this.placeholder}"></input-placeholder>
            <hr style="margin-top: 2rem;">
            <titulo-h1 texto="Hijo-Padre"></titulo-h1>
            <h2>Cambio de nombre</h2>
            <p>El nombre inicial es: ${this.nombreActual}</p>
            <h3>Cambiar de nombre</h3>
            <input-nombre @cambiar-nombre=${this.handleCambiarNombre}></input-nombre>
        `
    }
}

customElements.define('mostrar-hijos', MostrarNombreCambiante);