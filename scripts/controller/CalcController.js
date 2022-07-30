class CalcController {

  constructor() {
    this._displayCalcElement = document.querySelector('#display-2');
    this._dataAtual;
    this.initialize();
    this.initButtonsEvents();
  }

  get displayCalc() {
    return this._displayCalcElement.value;
  }

  set displayCalc(value) {
    this._displayCalcElement.value = value;
  }

  initialize() {

  }

  initButtonsEvents() {
    let buttons = document.querySelectorAll('.keyboard > button');
    buttons.forEach((btn, index) => {
      btn.addEventListener('click', e => {
        console.log(btn.id.replace('btn-', ''));
      })
    })
  }
}