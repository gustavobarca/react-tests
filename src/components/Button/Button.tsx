import React from "react";

interface Props {
  children: string;
  onClick?: () => void;
}

export function Button({ children, onClick }: Props) {
  return (
    <button type="button" data-testid="button1" onClick={onClick}>
      {children}
    </button>
  );
}
