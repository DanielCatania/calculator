import React from "react";

interface Props {
  keyboardNumeric: {
    numericKeys: string[];
    addNumber: Function;
  };
}

export default function Keyboard({
  keyboardNumeric: { numericKeys, addNumber },
}: Props) {
  return (
    <div>
      <ul>
        {numericKeys.map((number) => (
          <input
            type="button"
            key={number}
            value={number}
            onClick={() => addNumber(number)}
          />
        ))}
      </ul>
    </div>
  );
}
