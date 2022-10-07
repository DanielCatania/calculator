import React from "react";
import { SpecialKey } from "../../Key";
import Box from "./Box";

export interface Props {
  functionsKeys: string[];
  executeFunction: Function;
}

export default function FunctionsKeyboard({
  functionsKeys,
  executeFunction,
}: Props) {
  return (
    <Box>
      {functionsKeys.map((func) => (
        <SpecialKey
          type="button"
          key={func}
          value={func}
          onClick={() => executeFunction(func)}
        />
      ))}
    </Box>
  );
}
