import React from "react";
import numbersService from "../src/service/numbers";

export default function Home() {
  const [number, setNumber] = React.useState(numbersService.number);

  React.useEffect(() => {
    numbersService.enroll(setNumber);
  }, []);

  return (
    <div>
      <h1>{number}</h1>
      <ul>
        {numbersService.numericKeys.map((number) => (
          <input
            type="button"
            key={number}
            value={number}
            onClick={() => numbersService.addNumber(number)}
          />
        ))}
      </ul>
    </div>
  );
}
