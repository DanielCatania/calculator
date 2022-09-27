import styled from "styled-components";

const Text = styled.p`
  font-family: "Open Sans", sans-serif;
`;

export const TextInFocus = styled(Text)`
  font-size: 2em;
  font-weight: bold;
`;

export const UnfocusedText = styled(Text)`
  font-size: 1.5em;
  color: #a7a7a7;
`;

export default Text;
