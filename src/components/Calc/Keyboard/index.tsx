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
  keyboardFunctions: {
    functionsKeys: string[];
    executeFunction: Function;
  };
}

export default function Keyboard({
  keyboardNumeric: { numericKeys, addNumber },
  keyboardOperation: { operatiosnKeys, changeOperation },
  keyboardFunctions: { functionsKeys, executeFunction },
}: Props) {
  return (
    <div>
      <div>
        <ul>
          {functionsKeys.map((func) => (
            <input
              type="button"
              key={func}
              value={func}
              onClick={() => executeFunction(func)}
            />
          ))}
        </ul>
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
