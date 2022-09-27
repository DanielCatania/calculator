import React from "react";

import Keyboard from "./Keyboard";
import Screen from "./Screen";
import BoxCalc from "./BoxCalc";

import numbersService from "../../service/numbers";
import operationsService from "../../service/operations";
import functionsService from "../../service/functions";

export default function Calc() {
  const [number, setNumber] = React.useState(numbersService.number);
  const [operation, setOperation] = React.useState(
    operationsService.currentOperation.symbol
  );
  const [firstNumber, setFirstNumber] = React.useState(
    operationsService.firstNumber
  );

  React.useEffect(() => {
    numbersService.enroll(setNumber);

    operationsService.enroll(setOperation, "symbol");
    operationsService.enroll(setFirstNumber, "firstNumber");
  }, []);

  return (
    <BoxCalc>
      <Screen number={number} firstNumber={firstNumber} operation={operation} />
      <Keyboard
        keyboardNumeric={{
          numericKeys: numbersService.numericKeys,
          addNumber: numbersService.addNumber.bind(numbersService),
        }}
        keyboardOperation={{
          operatiosnKeys: operationsService.operationsKeys,
          changeOperation:
            operationsService.changeOperation.bind(operationsService),
        }}
        keyboardFunctions={{
          executeFunction:
            functionsService.executeFunction.bind(functionsService),
          functionsKeys: functionsService.functionsKeys,
        }}
      />
    </BoxCalc>
  );
}
