import { Button } from "components/Button/Button";
import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Contador
      <h3 data-testid="counter">{count}</h3>
      <Button onClick={() => setCount((prev) => prev + 1)}>More</Button>
    </div>
  );
}
