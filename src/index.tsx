import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";

import { Provider } from "react-redux";

import { store } from "services";
import { themeConfig } from "configs";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { CssReset } from "components";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={themeConfig}>
        <CssReset />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
