import { LitElement, html } from "lit";

export class InputNombre extends LitElement {
    static properties = {
        valorInput: { type: String }
    }

    constructor(){
        super();
        this.valorInput = '';
    }

    onInput(evento) {
        this.valorInput = evento.target.value;
    }

    enviarNombre() {
        const evento = new CustomEvent('cambiar-nombre', {
            detail: this.valorInput,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(evento);
    }
    
    render(){
        return html`
            <input .value=${this.valorInput} @input=${this.onInput}/>
            <button @click=${this.enviarNombre}>actualizar</button>
        `
    }
}

customElements.define('input-nombre', InputNombre);