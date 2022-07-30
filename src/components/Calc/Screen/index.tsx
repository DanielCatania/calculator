import React from "react";

interface Props {
  number: string;
  firstNumber: number;
  operation: string;
}

export default function Screen({ number, firstNumber, operation }: Props) {
  return (
    <h1>
      {firstNumber !== 0 ? (
        <>
          <span>{firstNumber}</span>
          <span>{operation}</span>
          <span>{number}</span>
        </>
      ) : (
        <span>{number}</span>
      )}
    </h1>
  );
}
