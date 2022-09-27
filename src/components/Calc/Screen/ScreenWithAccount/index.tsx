import React from "react";
import { Props } from "..";
import { UnfocusedText, TextInFocus } from "../../../Text";

export default function ScreenWithAccount({
  firstNumber,
  number,
  operation,
}: Props) {
  return (
    <>
      <UnfocusedText as="span">{firstNumber}</UnfocusedText>
      <UnfocusedText as="span">{operation}</UnfocusedText>
      <TextInFocus as="span">{number}</TextInFocus>
    </>
  );
}
