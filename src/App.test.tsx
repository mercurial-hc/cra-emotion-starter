import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "services";
import App from "./App";

test("renders main content", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/main/i)).toBeInTheDocument();
});
