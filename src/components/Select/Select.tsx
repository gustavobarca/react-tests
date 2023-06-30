import React, { useState } from "react";
import './style.css';

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
    <div className="select-container" data-testid="select-container" onClick={() => setOpen(prev => !prev)}>
      <button type="button" className="select-label" data-testid="select-label">
        {selected ? selected.value : 'Selecione uma opcão'}
      </button>
      {open && (
        <ul className="select-options" data-testid="select-options">
          {options.map(option => (
            <li
              key={option.key}
              onClick={() => setSelected(option)}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}