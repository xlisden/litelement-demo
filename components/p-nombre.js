import { LitElement, html, css } from 'lit';

export class PNombre extends LitElement {
    static properties = {
        nombre: { type: String }
    };

    static styles = css`
        p {
            color: #7a7a7a;            
            font-size: 1rem;
        }
    `;

    constructor() {
        super();
        this.nombre = 'desde padre';
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("click", this.clickcito);
    }

    firstUpdated() {
        console.log(`firstudpated`);
    }

    render() {
        return html`
            <p>Hola,: ${this.nombre}</p>
        `;
    }

    updated(cambios) {
        console.log(`updated`);
        if (cambios.has('nombre')) {
            console.log(`se cambio nombre en p-nnombre`);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log(`limpiando evento click`);
        this.removeEventListener('click', this.clickcito);
    }

    clickcito() {
        const p = this.renderRoot.querySelector('p');
        const color = `#222222`
        const size = `2rem`

        p.style.color = color;
        p.style.fontSize = size;
        console.log(`clickcito`);
    }

}

customElements.define('p-nombre', PNombre);