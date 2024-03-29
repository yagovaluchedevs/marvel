import { createGlobalStyle } from "styled-components";
import fundo from "../../assets/fundo-avengers.jpg";

export const CreateGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    width: 100%;
    background: url(${fundo}) ;
    background-size: 100% 112vh;

    @media(max-width: 750px){
      background-size: 100vh 100vh;
    }
  }
`;
