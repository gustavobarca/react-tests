import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render content", async () => {
    render(<App />);
    const element = await screen.findByText("🧪 Testes em React JS");
    expect(element).toBeInTheDocument();
  });
});
