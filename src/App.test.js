import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

test("renders learn react link", () => {
  render(<App />, { wrapper: BrowserRouter });
  console.log(screen.debug());
  const linkElement = screen.getByText("Art with Code");
  expect(linkElement).toBeInTheDocument();
});
