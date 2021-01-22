import { createGlobalStyle } from "styled-components";
import fundo from "../../assets/fundo.jpg";

export const CreateGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    width: 100%;
    background: url(${fundo});
  }
`;
