import styled from "styled-components";

const Key = styled.input`
  background: #1a1a1a;
  color: #fff;
  border-radius: 10px;
  border: none;

  text-align: center;
  font-size: 22px;
`;

export const SpecialKey = styled(Key)`
  color: #000;
  background-color: #ffb800;
  border-radius: 15px;

  font-size: 1.5em;
`;

export default Key;
