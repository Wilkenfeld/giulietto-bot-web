import { LitElement, html, css } from "lit";

class Datepicker extends LitElement {
  static properties = {
    name: { type: String },
    min: { type: String },
    max: { type: String },
    value: { type: String, attribute: 'value', reflect: true }
  }

  static styles = css`
      input {
        border-color: white;
        border: 1px solid black;
        border-radius: 8px;
      }
  `

  constructor(name, min, max, value) {
    super();
      this.name = name;
      this.value = value || min;
      this.min = min;
      this.max = max;
      console.log(this)
  }

  render() {
    return html`
      <div test-id="date-picker-container">
        <label for="${this.name}" test-id="date-picker-label">${this.label}</label>
        <input type="date" name=${this.name} value=${this.value} min=${this.min} max=${this.max} test-id="${this['test-id'] || 'datepicker-input'}" @change=${e => this.value = e.target.value} />
      </div>
    `
  }
}
customElements.define('date-picker', Datepicker)
