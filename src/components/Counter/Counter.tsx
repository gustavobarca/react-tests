import { Button } from "components/Button/Button";
import React, { useState } from "react";
import './style.css';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <span style={{ marginBottom: 10 }}>
      Contador:&nbsp; 
      <span data-testid="counter">{count}</span>
      </span>
      <Button onClick={() => setCount((prev) => prev + 1)}>Incrementar</Button>
    </div>
  );
}
