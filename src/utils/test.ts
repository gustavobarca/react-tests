import { fireEvent } from "@testing-library/react";

export function click(element: HTMLElement) {
  return fireEvent(element, new MouseEvent('click', {
    bubbles: true,
  }));
}