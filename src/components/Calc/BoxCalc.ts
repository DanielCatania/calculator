import styled from "styled-components";

const BoxCalc = styled.div`
  width: 90%;
  height: 80%;
  max-width: 350px;
  max-height: 500px;

  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  padding: 1em;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
`;

export default BoxCalc;
