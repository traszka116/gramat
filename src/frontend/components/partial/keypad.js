import { css, html, LitElement } from "../../../lib/lit.min.js";
class Keypad extends LitElement {
  static styles = css`
    .keypad {
      height: 40%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 1px;
    }
    .button {
      width: calc(100% / 3 - 1px);
    }
  `;

  buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "<"];

  publish(action) {
    this.dispatchEvent(
      new CustomEvent("keyboard-pressed", {
        detail: action,
        bubbles: true,
        composed: true,
      })
    );
  }

  connectedCallback() {
    super.connectedCallback();
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./lib/pure.min.css";
    this.renderRoot.prepend(link);
  }

  render() {
    return html`
      <div class="keypad">
        ${this.buttons.map(
          (btn) =>
            html` <button
              class="button pure-button"
              @click=${() => this.publish(btn)}
            >
              ${btn}
            </button>`
        )}
      </div>
    `;
  }
}
customElements.define("x-keypad", Keypad);
