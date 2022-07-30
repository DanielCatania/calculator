import React from "react";

interface Props {
  number: string;
}

export default function Screen({ number }: Props) {
  return <h1>{number}</h1>;
}
