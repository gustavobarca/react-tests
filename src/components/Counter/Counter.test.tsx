import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("should start with 0", async () => {
    render(<Counter />);

    const counter = await screen.findByTestId("counter");

    expect(counter).toBeInTheDocument();
    expect(counter.textContent).toBe("0");
  });

  it("should be 1 after first click", async () => {
    render(<Counter />);

    const button = await screen.findByTestId("button1");
    const counter = await screen.findByTestId("counter");

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(counter).toBeInTheDocument();
    expect(counter.textContent).toBe("1");
  });
  
  it("should be 2 after second click", async () => {
    render(<Counter />);

    const button = await screen.findByTestId("button1");
    const counter = await screen.findByTestId("counter");

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(counter).toBeInTheDocument();
    expect(counter.textContent).toBe("2");
  });
});
