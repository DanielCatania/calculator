import React from "react";
import { TextInFocus } from "../../../Text";

export default function SimpleScreen({ number }: { number: string }) {
  return (
    <>
      <TextInFocus as="span">{number}</TextInFocus>
    </>
  );
}
