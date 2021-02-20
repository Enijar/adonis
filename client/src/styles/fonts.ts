import { createGlobalStyle } from "styled-components";

// todo: reduce number of loaded fonts to improve initial load times
export default createGlobalStyle`
  @font-face {
    font-family: "Athelas";
    src: url("/assets/fonts/athelas-bold.woff2") format("woff2"),
    url("/assets/fonts/athelas-bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("/assets/fonts/source-sans-pro-black.woff2") format("woff2"),
    url("/assets/fonts/source-sans-pro-black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("/assets/fonts/source-sans-pro-bold-italic.woff2") format("woff2"),
    url("/assets/fonts/source-sans-pro-bold-italic.woff") format("woff");
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("/assets/fonts/source-sans-pro-extra-light.woff2") format("woff2"),
    url("/assets/fonts/source-sans-pro-extra-light.woff") format("woff");
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("/assets/fonts/source-sans-pro-black-italic.woff2") format("woff2"),
    url("/assets/fonts/source-sans-pro-black-italic.woff") format("woff");
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("/assets/fonts/source-sans-pro-italic.woff2") format("woff2"),
    url("/assets/fonts/source-sans-pro-italic.woff") format("woff");
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("/assets/fonts/source-sans-pro-extra-light-italic.woff2") format("woff2"),
    url("/assets/fonts/source-sans-pro-extra-light-italic.woff") format("woff");
    font-weight: 200;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("/assets/fonts/source-sans-pro-bold.woff2") format("woff2"),
    url("/assets/fonts/source-sans-pro-bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("/assets/fonts/source-sans-pro-regular.woff2") format("woff2"),
    url("/assets/fonts/source-sans-pro-regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("/assets/fonts/source-sans-pro-light.woff2") format("woff2"),
    url("/assets/fonts/source-sans-pro-light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("/assets/fonts/source-sans-pro-semi-bold-italic.woff2") format("woff2"),
    url("/assets/fonts/source-sans-pro-semi-bold-italic.woff") format("woff");
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("/assets/fonts/source-sans-pro-semi-bold.woff2") format("woff2"),
    url("/assets/fonts/source-sans-pro-semi-bold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("/assets/fonts/source-sans-pro-light-italic.woff2") format("woff2"),
    url("/assets/fonts/source-sans-pro-light-italic.woff") format("woff");
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }
`;
