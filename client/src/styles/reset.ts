import { createGlobalStyle } from "styled-components";
import { fluidRange } from "polished";
import vars from "./vars";

export default createGlobalStyle`
  *, &:before, &:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    letter-spacing: inherit;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    font-family: ${vars.font.primary};
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: `${vars.rootSize * 0.5}px`,
        toSize: `${vars.rootSize}px`,
      },
      `${vars.responsiveMin}px`,
      `${vars.responsiveMax}px`
    )};
    font-weight: 300;
    letter-spacing: 0.05em;
  }

  svg, img, iframe, canvas {
    max-width: 100%;
    align-self: center;
    flex-shrink: 0;
  }

  a {
    text-decoration: none;
  }
`;
