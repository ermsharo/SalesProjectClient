import { createGlobalStyle } from "styled-components";
import { BreakPoints, Colors } from "./defaultProps";
import { Fonts } from "./defaultProps";

const GlobalStyle = createGlobalStyle`
   

   body{
      background-color: ${Colors.firstBackground};
      color:${Colors.primaryfontColor};  
      font-family: ${Fonts.secondaryFont};
      border:0;
      margin:0;
   }
   h1 {
    font-family: ${Fonts.primaryFont}   

    font-size:2.5rem;
    padding:1.5rem;
  }
  h2 {
    font-size:2.2rem;
    letter-spacing: 0.15rem;
    font-family: ${Fonts.primaryFont};
    text-transform: capitalize;
    padding:1rem;

    @media (max-width: ${BreakPoints.bgMediumDevices}) {
      font-size:1.5rem;

    padding:1rem;
  }

  }

`;
export default GlobalStyle;
