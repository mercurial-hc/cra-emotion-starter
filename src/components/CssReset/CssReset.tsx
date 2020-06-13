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
    `}
  />
);

export default CssReset;
