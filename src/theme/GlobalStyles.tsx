import { createGlobalStyle } from "styled-components";
import { ITheme } from "./theme";

export const lightTheme: ITheme = {
  bg: "#FFFFFF",
  font: "#324861",
  primary: "#EBF6FE",
  secondary: "#F3F0EC",
  active: "#FD925F",
  success: "#d0f0c0",
  border: "#1A1F26",
};

export const darkTheme: ITheme | any = {
  bg: "#0A1018",
  font: "#d7d7d7",
  primary: "#C78D4E",
  secondary: "#161C23",
  active: "#FD925F",
  success: "#123524",
  border: "#1c2027",
};

export const GlobalStyle = createGlobalStyle`
  *, html, body, #root {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: all 0.375 ease-in-outp;
    font-family: "Avenir LT Std 35 light";
  }
  ::-webkit-scrollbar {
    height: 6px;
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.font + 25};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: ${(props) => props.theme.font};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.font};
  }
  ::-moz-selection {
    background: ${(props) => props.theme.font};
  }
  ::selection {
    background: ${(props) => props.theme.font};
  }
  html.theming,
  html.theming * {
    transition: all 0.375s ease-in-out;
  }
  html,
  body {
    color: ${(props) => props.theme.font};
    background-color:  ${(props) => props.theme.bg};
    -ms-overflow-style: scrollbar;
    scrollbar-width: auto;
  }
  html::-webkit-scrollbar,
  body::-webkit-scrollbar {
    width: 6px;
    display: block;
  }
`;
