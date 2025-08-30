import { LitElement, html, css } from 'lit';

export class TituloH1 extends LitElement {
    static properties = {
        texto: { type: String }
    }

    static styles = css`
        h1 {
            color: red;
            text-decoration: underline;
        }
    `;

    textoInicial = 'Texto Inicial!';

    render() {
        return html`
            <h1>${this.texto}</h1> 
        `;
    }
}

customElements.define('titulo-h1', TituloH1);
