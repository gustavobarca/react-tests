import React, { useState } from "react";

export interface Option {
  value: string;
  key: string;
}

interface Props {
  options: Option[];
}

export function Select({ options }: Props) {
  const [selected, setSelected] = useState<Option | undefined>();
  const [open, setOpen] = useState(false);

  return (
    <div data-testid="select-container" onClick={() => setOpen(true)}>
      <span data-testid="select-label">
        {selected ? selected.value : 'Selecione uma opcão'}
      </span>
      {open && (
        <div data-testid="select-options">
          {options.map(option => (
            <button
              key={option.key}
              type="button"
              onClick={() => setSelected(option)}
            >
              {option.value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}