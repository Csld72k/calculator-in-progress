class CalcController {

  constructor() {
    this._operation = [];
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

  clearAll() {
    this._operation = [];
  }

  clearEntry() {
    this._operation.pop();
  }

  addOperation(value) {
    this._operation.push(value);
    console.log(this._operation);
  }

  setError() {
    this.displayCalc = 'Error'
  }

  execBtn(value) {
    switch (value) {
      case 'percentage':
        break;
      case 'clear-entry':
        this.clearEntry();
        break;
      case 'clear-all':
        this.clearAll();
        break;
      case '1-bar-x':
        break;
      case 'x-squared':
        break;
      case 'square-root':
        break;
      case 'division':
        break;
      case 'multiplication':
        break;
      case 'minus':
        break;
      case 'plus':
        break;
      case 'plus-or-minus':
        break;
      case 'comma':
        break;
      case 'equal':
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.addOperation(parseInt(value));
        break;
      default:
        this.setError();
    }
  }

  initButtonsEvents() {
    let buttons = document.querySelectorAll('.keyboard > button');
    buttons.forEach((btn, index) => {
      btn.addEventListener('click', e => {
        let textBtn = (btn.id.replace('btn-', ''));
        console.log(textBtn);
        this.execBtn(textBtn);
      })
    })
  }
}