import { css, html, LitElement } from "../../lib/lit.min.js";

import "../partial/keypad.js";
import "../partial/field.js";
import "../partial/slider.js";
import "../partial/success-mark.js";

class AddSubExercise extends LitElement {
  static properties = {
    exerciseId: { type: Number, attribute: "exercise-id" },
    exercise: { type: String },
    solution: { type: String },
    given: { attribute: false, type: String }, 
    config: { type: Object },
    sliderMin: { type: Number },
    sliderMax: { type: Number },
    
    statuses: { attribute: false } 
  };

  static styles = css`
    :host { display: block; width: 100%; height: 100%; }
    .container { 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      justify-content: center; 
      gap: 20px; 
      color: white; 
      font-family: sans-serif; 
      height: 100%; 
    }
    .question { font-size: 4rem; font-weight: bold; margin-bottom: 20px; }
    .fields-group { display: flex; flex-direction: row; gap: 0.5rem; margin-bottom: 2rem; }
  `;

  constructor() {
    super();
    this.exerciseId = null;
    this.exercise = "";
    this.solution = "";
    this.given = "";
    this.config = { mode: "loading" };
    this.sliderMin = 0;
    this.sliderMax = 10;
    this.statuses = []; 
  }

  calculateRange(solutionStr) {
    const sol = parseInt(solutionStr);
    if (isNaN(sol)) return;
    this.sliderMin = 0; 
    if (sol <= 10) this.sliderMax = 10;
    else if (sol <= 20) this.sliderMax = 20;
    else if (sol <= 50) this.sliderMax = 50;
    else if (sol <= 100) this.sliderMax = 100;
    else this.sliderMax = Math.ceil(sol / 100) * 100;
    this.given = Math.floor(this.sliderMax / 2).toString();
  }

  handleInput(e) {
    const val = e.detail;
    
    this.statuses = []; 

    if (this.config.mode === 'slider') {
        this.given = val.toString();
    } 
    else if (this.config.mode === 'keypad') {
        if (val === "<") this.given = this.given.slice(0, -1);
        else if (this.given.length < this.solution.length) this.given += val;
        this.requestUpdate();
    }
  }

  check() {
    //logika dla slidera
    if (this.config.mode === 'slider') {
        if (this.given === this.solution) {
            this.shadowRoot.getElementById('mark').show();
        } else {
            const slider = this.shadowRoot.querySelector('x-input-slider');
            if(slider) slider.showError();
        }
    } 
    //logika dla keyuplada
    else {
        this.statuses = Array.from(this.solution).map((char, i) =>
            this.given[i] === char ? "correct" : "wrong"
        );

        const isAllCorrect = this.statuses.every(s => s === "correct");
        
        if (isAllCorrect && this.given.length === this.solution.length) {
            this.shadowRoot.getElementById('mark').show();
        } 
    }
  }

  connectedCallback() {
    super.connectedCallback();
    const id = this.exerciseId || 1;
    
    fetch(`/exercise/${id}`)
      .then(res => res.json())
      .then(data => {
        if(data && data.length > 0) {
           const ex = data[0];
           this.exercise = ex.exercise_question;
           this.solution = ex.exercise_answer.toString();
           
           try {
             if (ex.exercise_attachments) {
                this.config = JSON.parse(ex.exercise_attachments);
             } else {
                this.config = { mode: "keypad" };
             }
             
             if (this.config.mode === 'slider') {
                 this.calculateRange(this.solution);
             } else {
                 this.given = "";
             }
           } catch (err) {
             console.error("Błąd JSON:", err);
             this.config = { mode: "keypad" };
           }
        }
        else {
            console.warn(`Zadanie ID=${id} nie istnieje.`);
            this.exercise = "Brak zadania w bazie";
            this.config = { mode: "error" }; 
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    return html`
      <x-success-mark id="mark"></x-success-mark>
      <div class="container">
        <div class="question">${this.exercise}</div>
        
        ${this.config.mode === 'slider' 
          ? html`
              <x-input-slider 
                min="${this.sliderMin}" 
                max="${this.sliderMax}" 
                .value="${parseInt(this.given)}"
                @value-changed="${this.handleInput}"
              ></x-input-slider>
            `
          : this.config.mode === 'keypad' 
            ? html`
                <div class="fields-group">
                  ${Array.from(this.solution).map((_, i) => html`
                      <x-field 
                        value="${this.given[i] || ''}"
                        status="${this.statuses[i] || ''}"
                      ></x-field>
                  `)}
                </div>
                <x-keypad @keyboard-pressed="${this.handleInput}"></x-keypad>
              `
            : html`<div>Wczytywanie...</div>`
        }
      </div>
    `;
  }
}
customElements.define("x-addsub-exercise", AddSubExercise);