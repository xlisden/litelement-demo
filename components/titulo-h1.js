import { LitElement, html, css } from 'lit';

export class TituloH1 extends LitElement {
    static styles = css`
        h1 {
            color: red;
            text-decoration: underline;
        }
    `;

    render() {
        return html`
            <h1> Wola, Mundo </h1> 
        `;
    }
}

customElements.define('titulo-h1', TituloH1);
