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

    this.setLastNumberToDisplay();

  }

  clearAll() {

    this._operation = [];
    this.setLastNumberToDisplay();

  }

  clearEntry() {

    this._operation.pop();
    this.setLastNumberToDisplay();

  }

  getLastOperation() {

    return this._operation[this._operation.length - 1];

  }

  setLastOperation(value) {

    this._operation[this._operation.length - 1] = value;

  }

  isOperator(value) {

    return ['/', '*', '-', '+', '%'].indexOf(value) > -1;

  }

  pushOperation(value) {

    this._operation.push(value);

    if (this._operation.length > 3) {

      this.calc();

    }

  }

  calc() {

    let last = '';

    if (this._operation.length > 3) {

      let last = this._operation.pop();

    }

    // let last = this._operation.pop();
    let result = eval(this._operation.join(''));

    if (last == '%') {

      result /= 100;
      this._operation = [result];

    } else {

      this._operation = [result];

    }

    this.setLastNumberToDisplay();

    if (last) this._operation.push(last);

  }

  setLastNumberToDisplay() {

    let lastNumber;

    for (let i = this._operation.length - 1; i >= 0; i--) {

      if (!this.isOperator(this._operation[i])) {

        lastNumber = this._operation[i];
        break;

      }

    }

    if (!lastNumber) lastNumber = 0;

    this.displayCalc = lastNumber;

  }

  addOperation(value) {

    if (isNaN(this.getLastOperation())) {

      if (this.isOperator(value)) {

        this.setLastOperation(value);

      } else if (isNaN(value)) {

        console.log('outra coisa', value);

      } else {

        this.pushOperation(value);

        this.setLastNumberToDisplay();

      }

    } else {

      if (this.isOperator(value)) {

        this.pushOperation(value);

      } else {

        let newValue = this.getLastOperation().toString() + value.toString();
        this.setLastOperation(parseInt(newValue));

        this.setLastNumberToDisplay();

      }

    }

  }

  setError() {

    this.displayCalc = 'Error'

  }

  execBtn(value) {

    switch (value) {

      case 'percentage':
        this.addOperation('%');
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
        this.addOperation('/');
        break;

      case 'multiplication':
        this.addOperation('*');
        break;

      case 'minus':
        this.addOperation('-');
        break;

      case 'plus':
        this.addOperation('+');
        break;

      case 'plus-or-minus':
        break;

      case 'comma':
        this.addOperation('comma');
        break;

      case 'equal':
        this.calc();
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
        // console.log(textBtn);
        this.execBtn(textBtn);
      })
    })
  }
}