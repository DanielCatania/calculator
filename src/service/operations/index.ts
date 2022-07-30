import numbersService from "../numbers";

const initialEnrolleds: Array<{
  setter: Function;
  enrollingFor: "firstNumber" | "symbol";
}> = [];

const operationsService = {
  enrolled: initialEnrolleds,
  enroll(setter: Function, enrollingFor: "firstNumber" | "symbol") {
    this.enrolled.push({ setter, enrollingFor });
  },
  notify() {
    this.enrolled.forEach(({ setter, enrollingFor }) => {
      if (enrollingFor === "firstNumber") {
        setter(this.firstNumber);
      }
      if (enrollingFor === "symbol") {
        setter(this.currentOperation.symbol);
      }
    });
  },

  currentOperation: {
    symbol: "",
    func: (n1: number, n2: number) => 0 * (n1 + n2),
  },
  operations: [
    {
      symbol: "+",
      func: (n1: number, n2: number) => {
        return n1 + n2;
      },
    },
    {
      symbol: "-",
      func: (n1: number, n2: number) => {
        return n1 - n2;
      },
    },
    {
      symbol: "x",
      func: (n1: number, n2: number) => {
        return n1 * n2;
      },
    },
    {
      symbol: "÷",
      func: (n1: number, n2: number) => {
        return n1 / n2;
      },
    },
  ],
  operationsKeys: ["+", "-", "x", "÷", "="],

  changeOperation(operation: "+" | "-" | "x" | "÷" | "=") {
    const equals = this.checkOperation(operation);

    this.getNumber();

    if (equals === false) {
      this.executeOperation();
      this.resetOperation();
      return;
    }

    this.notify();
  },
  checkOperation(operation: "+" | "-" | "x" | "÷" | "=") {
    let equals = false;

    this.operations.forEach(({ symbol, func }) => {
      if (symbol === operation) {
        this.currentOperation = {
          func,
          symbol,
        };
        equals = true;
      }
    });

    return equals;
  },
  resetOperation() {
    this.currentOperation = {
      symbol: "",
      func: (n1: number, n2: number) => 0 * (n1 + n2),
    };

    this.notify();
  },
  executeOperation() {
    const result = this.currentOperation.func(
      this.firstNumber,
      this.secondNumber
    );

    this.resetNumber();

    numbersService.setNumber(result.toString());
  },

  firstNumber: 0,
  secondNumber: 0,

  getNumber() {
    if (this.firstNumber === 0) {
      this.firstNumber = parseFloat(numbersService.number);
      numbersService.resetNumber();
    } else {
      this.secondNumber = parseFloat(numbersService.number);
    }
  },
  resetNumber() {
    this.firstNumber = 0;
    this.secondNumber = 0;
  },
};

export default operationsService;
