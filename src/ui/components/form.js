import { LitElement, html, css } from "lit";

class CustomForm extends LitElement {
    static properties = {
	id: { type: String, reflect: true },
	method: { type: String, reflect: true },
	action: { type: String, reflect: true },
    }

    constructor(id) {
	super();
	this.id = id || "form-container";
    }

    firstUpdated() {
	const children = this._slottedChildren
	const submitButton = children.find(e => e.localName === "submit-button")
	const listener = submitButton.onclick
	submitButton.onclick = (e) => {
	    this._submitForm(children)
	    listener?.(e)
	}
    }

    _submitForm(children) {
	fetch(this.)
	console.log(children)
    }

    get _slottedChildren() {
	const slot = this.shadowRoot.querySelector('slot')
	return slot.assignedElements({flatten: true});
    }

    render() {
	return html`
            <div id=${this.id}>
		<slot id="form-data">
		</slot>
	    </div>
	`
    }
}

customElements.define("custom-form", CustomForm);
