import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Option, Select } from "./Select";
import { click } from "utils/test";

const options: Option[] = [
  { key: '1', value: 'Option 1' },
  { key: '2', value: 'Option 2' },
  { key: '3', value: 'Option 3' }
];

describe("Select", () => {
  it('should start with default option', async () => {
    render(<Select options={options} />);

    const label = await screen.findByTestId('select-label');

    expect(label).toBeInTheDocument();
    expect(label.textContent).toBe('Selecione uma opcão');
  });

  it('should start closed', async () => {
    render(<Select options={options} />);

    expect(screen.queryByTestId('select-options')).toBe(null);
  });

  it('should open when clicked', async () => {
    render(<Select options={options} />);

    const selectContainer = await screen.findByTestId('select-container');

    click(selectContainer);
    
    const optionsElement = await screen.findByTestId('select-options');

    expect(optionsElement).toBeInTheDocument();
  });
});
