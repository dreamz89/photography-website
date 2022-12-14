import { createGlobalStyle } from "styled-components";
import TungstenBoldWoff from "assets/fonts/Tungsten-Bold.woff";
import TungstenBoldWoff2 from "assets/fonts/Tungsten-Bold.woff2";
import TungstenSemiBoldWoff from "assets/fonts/Tungsten-Bold.woff";
import TungstenSemiBoldWoff2 from "assets/fonts/Tungsten-Bold.woff2";

export const GlobalStyle = createGlobalStyle`
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
    box-sizing: border-box;
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

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Tungsten', Helvetica;
    letter-spacing: 0.04em;
  }

  p, a {
    font-family: Helvetica;
    font-size: 16px;
    letter-spacing: 0.08em;
  }

  @font-face {
    font-family: 'Tungsten';
    src: url(${TungstenSemiBoldWoff2}) format('woff2'),
        url(${TungstenSemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Tungsten';
    src: url(${TungstenBoldWoff2}) format('woff2'),
        url(${TungstenBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`;
