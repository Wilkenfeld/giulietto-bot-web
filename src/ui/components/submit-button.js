import { LitElement, html, css } from "lit";

class SubmitButton extends LitElement {

    static properties = {
	text: { type: String, reflect: true }
    }
    
    constructor() {
	super()
    }
  
    render() {
	return html`<button @click=${this._submitEvent}>${this.text}</button>`
    }

    _submitEvent(e) {
	console.log(e)
    }
}

customElements.define('submit-button', SubmitButton)
