import React from "react";

interface Props {
  keyboardNumeric: {
    numericKeys: string[];
    addNumber: Function;
  };
  keyboardOperation: {
    operatiosnKeys: string[];
    changeOperation: Function;
  };
}

export default function Keyboard({
  keyboardNumeric: { numericKeys, addNumber },
  keyboardOperation: { operatiosnKeys, changeOperation },
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
      <aside>
        <ul>
          {operatiosnKeys.map((operation) => (
            <input
              type="button"
              key={operation}
              value={operation}
              onClick={() => changeOperation(operation)}
            />
          ))}
        </ul>
      </aside>
    </div>
  );
}
