import { css, html, LitElement } from "../../lib/lit.min.js";

class Field extends LitElement {
  static properties = {
    value: { type: String },
    status: { type: String }, // "", "correct", "wrong"
  };

  static styles = css`
    .window {
      width: 2rem;
      height: 3rem;
      font-size: 2.5rem;
      border: 1px solid black;
      border-radius: 0.5rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .correct {
      border: 1px solid #9fda9f;
    }

    .wrong {
      border: 1px solid #9fda9f #f2a1a1;
    }
  `;

  render() {
    return html`
      <div class="window ${this.status}">${this.value?.[0] ?? ""}</div>
    `;
  }
}

customElements.define("x-field", Field);
