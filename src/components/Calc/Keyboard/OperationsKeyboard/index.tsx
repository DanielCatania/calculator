import React from "react";
import { SpecialKey } from "../../Key";
import Box from "./Box";

export interface Props {
  operationsKeys: string[];
  changeOperation: Function;
}

export default function OperationsKeyboard({
  operationsKeys,
  changeOperation,
}: Props) {
  return (
    <Box>
      {operationsKeys.map((operation) => (
        <SpecialKey
          type="button"
          key={operation}
          value={operation}
          onClick={() => changeOperation(operation)}
        />
      ))}
    </Box>
  );
}
