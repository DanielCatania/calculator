import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
  body {
    background-color:  ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalCSS;
