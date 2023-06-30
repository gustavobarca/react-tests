import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render content", async () => {
    render(<App />);
    const element = await screen.findByText("App contents goes here");
    expect(element).toBeInTheDocument();
  });
});
