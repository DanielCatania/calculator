import styled from "styled-components";

const Key = styled.input`
  background: ${({ theme }) => theme.colors.secundary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  border: none;

  text-align: center;
  font-size: 22px;

  max-width: 60px;
  max-height: 60px;
`;

export const SpecialKey = styled(Key)`
  color: #000;
  background-color: #ffb800;
  border-radius: 15px;

  font-size: 1.5em;

  max-width: 70px;
  max-height: 70px;
`;

export default Key;
