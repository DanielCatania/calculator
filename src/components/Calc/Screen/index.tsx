import React from "react";
import ScreenWithAccount from "./ScreenWithAccount";
import SimpleScreen from "./SimpleScreen";
import BoxScreen from "./BoxScreen";

export interface Props {
  number: string;
  firstNumber: number;
  operation: string;
}

export default function Screen(props: Props) {
  const { firstNumber, number } = props;
  return (
    <BoxScreen>
      {firstNumber !== 0 ? (
        <ScreenWithAccount {...props} />
      ) : (
        <SimpleScreen number={number} />
      )}
    </BoxScreen>
  );
}
