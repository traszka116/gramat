import { css, html, LitElement } from "../../lib/lit.min.js";

class ExerciseView extends LitElement {
  static styles = css`
    :host {
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .header {
      display: flex;
      display: flex;
      height: 8%;
      align-items: center;
      justify-content: center;
      column-gap: 3%;
    }

    .content {
      display: flex;
      height: 82%;
      justify-content: center;
      align-items: center;
    }

    #progress {
      width: 70%;
      height: 65%;
      background-color: white;
      border-radius: 0.6em;
      border: 0.2em solid black;
    }

    #bar {
      width: 20%;
      height: 100%;
      background-color: black;
      border-radius: 0.4em;
    }

    #score {
      height: 65%;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      padding-right: 5%;
    }

    #close {
      height: 65%;
      aspect-ratio: 1;
      font-size: 1.5em;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #check-button {
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #exercise {
      width: 85%;
      height: 100%;
    }

    .button {
      width: 85%;
      height: 70%;
      border-radius: 1rem;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      text-transform: uppercase;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./lib/pure.min.css";
    this.renderRoot.prepend(link);
  }

  firstUpdated() {
    const slot = this.renderRoot.querySelector("slot");
    slot.addEventListener("slotchange", () => {
      const assigned = slot.assignedElements();
      this._slottedComponent = assigned[0];
    });
  }

  _handleCheck() {
    if (this._slottedComponent?.check) {
      this._slottedComponent.check();
    } else {
      console.warn("Slotted component has no check() method");
    }
  }

  render() {
    return html`
      <div class="header">
        <div id="close">X</div>
        <div id="progress">
          <div id="bar"></div>
        </div>
        <div id="score">10</div>
      </div>
      <div class="content">
        <div id="exercise">
          <slot></slot>
        </div>
      </div>
      <div id="check-button">
        <button class="pure-button button" @click=${this._handleCheck}>
          check
        </button>
      </div>
    `;
  }
}

customElements.define("x-exercise-view", ExerciseView);
