import React from "react";

import Box from "./Box";

import NumericKeyboard, {
  Props as NumericKeyboardProps,
} from "./NumericKeyboard/";
import FunctionsKeyboard, {
  Props as FunctionsKeyboardProps,
} from "./FunctionsKeyboard/";
import OperationsKeyboard, {
  Props as OperationsKeyboardProps,
} from "./OperationsKeyboard/";

interface Props {
  keyboardNumeric: NumericKeyboardProps;
  keyboardOperation: OperationsKeyboardProps;
  keyboardFunctions: FunctionsKeyboardProps;
}

export default function Keyboard({
  keyboardNumeric,
  keyboardOperation,
  keyboardFunctions,
}: Props) {
  return (
    <Box>
      <div>
        <FunctionsKeyboard {...keyboardFunctions} />
        <NumericKeyboard {...keyboardNumeric} />
      </div>

      <aside>
        <OperationsKeyboard {...keyboardOperation} />
      </aside>
    </Box>
  );
}
