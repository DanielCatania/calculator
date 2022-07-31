import numbersService from "../numbers";
import operationsService from "../operations";

const functionsService = {
  functionsKeys: ["C", "CE", "←"],
  functions: [
    {
      symbol: "C",
      func: () => {
        operationsService.resetOperation();
        operationsService.resetNumber();

        numbersService.resetNumber();
      },
    },
    {
      symbol: "CE",
      func: () => {
        numbersService.resetNumber();
      },
    },
    {
      symbol: "←",
      func: () => {
        let { number } = numbersService;
        number = number.replace(/.$/, "");
        if (number === "" || number === "-") {
          number = "0";
        }

        numbersService.setNumber(number);
      },
    },
  ],
  executeFunction(funcKey: "C" | "CE" | "←") {
    this.functions.forEach(({ symbol, func }) => {
      if (symbol === funcKey) {
        func();
      }
    });
  },
};

export default functionsService;
