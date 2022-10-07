import React from "react";
import Key from "../../Key";
import Box from "./Box";

export interface Props {
  numericKeys: string[];
  addNumber: Function;
}

export default function NumericKeyboard({ numericKeys, addNumber }: Props) {
  return (
    <Box>
      {numericKeys.map((number) => (
        <Key
          type="button"
          key={number}
          value={number}
          onClick={() => addNumber(number)}
        />
      ))}
    </Box>
  );
}
