import React from "react";

import Keyboard from "./Keyboard";
import Screen from "./Screen";

import numbersService from "../../service/numbers";

export default function Calc() {
  const [number, setNumber] = React.useState(numbersService.number);

  React.useEffect(() => {
    numbersService.enroll(setNumber);
  }, []);

  return (
    <div>
      <Screen number={number} />
      <Keyboard
        keyboardNumeric={{
          numericKeys: numbersService.numericKeys,
          addNumber: numbersService.addNumber.bind(numbersService),
        }}
      />
    </div>
  );
}
