import React from "react";
import { Global, css } from "@emotion/core";

const CssReset: React.FC = () => (
  <Global
    styles={css`
      html {
        font-size: 16px;
      }

      * {
        padding: 0;
        margin: 0;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}
  />
);

export default CssReset;
