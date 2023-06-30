import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";

describe("Button", () => {
  it("should render children text", async () => {
    render(<Button>Button!</Button>);

    const element = await screen.findByTestId("button1");
    expect(element).toBeInTheDocument();
  });

  it("should call onClick once", async () => {
    const mockFn = jest.fn();

    render(<Button onClick={mockFn}>Button!</Button>);

    const element = await screen.findByTestId("button1");

    fireEvent(
      element,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(mockFn).toBeCalledTimes(1);
  });
});
