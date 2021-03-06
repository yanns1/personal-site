import { createGlobalStyle } from "styled-components";
// fonts
// @ts-ignore
import DankMonoRegular from "../../assets/fonts/DankMono-Regular.woff";
// @ts-ignore
import DankMonoRegular2 from "../../assets/fonts/DankMono-Regular.woff2";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* ================================================================ */
  @font-face {
  font-family: "Dank Mono Regular";
  src: url(${DankMonoRegular2}) format('woff2'),
  url(${DankMonoRegular}) format('woff');
  font-weight: normal;
  font-style: normal;
}


  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :root {
    --primary-light-color: rgba(37, 193, 175, 0.59);
    --primary-dark1-color: rgba(79, 165, 154, 1);
    --primary-dark2-color: rgba(20, 123, 110, 1);
    --smooth-white: #F2F2F2;
    --smooth-dark: #333333;
    --page-margin: 1rem;
    --border-radius: 4px;
    --transition-all: all 150ms ease-out;
  }

  @media (max-width: 600px) {
    :root {
      /* font-size: 12px; */
      font-size: 14px;
    }
  }

  @media (min-width: 600px) {
    :root {
      font-size: 16px;
      --page-margin: 5rem;
    }
  }

  @media (min-width: 800px) {
    :root {
      --page-margin: 10rem;
    }
  }

  @media (min-width: 1000px) {
    :root {
      --page-margin: 20rem;
    }
  }

  @media (min-width: 1400px) {
    :root {
      /* font-size: 20px; */
      font-size: 18px;
      --page-margin: 20rem;
    }
  }

  ::selection {
      background: ${(props) =>
        props.theme === "dark"
          ? "var(--primary-light-color)"
          : "var(--primary-dark2-color)"};
      color: var(--smooth-white);
  }

  body {
    /* Don't use units because poor inheritance behavior */
    /* (cause problems for headers here) */
    line-height: 1.4;
    font-family: Montserrat, sans-serif;
    color: ${(props) =>
      props.theme === "dark" ? "var(--smooth-white)" : "var(--smooth-dark)"};
    background-color: ${(props) =>
      props.theme === "dark" ? "var(--smooth-dark)" : "var(--smooth-white)"};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .self-made-link {
    color: #2F80ED;
    transition: var(--transition-all);
    &:hover {
      text-decoration: underline;
    }
  }

`;
export default GlobalStyle;
