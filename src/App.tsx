import React from "react";
import "./styles.css";
import { Counter } from "components/Counter/Counter";
import { Option, Select } from "components/Select/Select";

const options: Option[] = [
  { key: '1', value: 'Option 1' },
  { key: '2', value: 'Option 2' },
  { key: '3', value: 'Option 3' }
];

export default function App() {
  return (
    <main className="main">
      <h1>🧪 Testes em React JS</h1>
      <hr />
      <section>
        <Counter />
      </section>
      <hr />
      <section>
        <Select options={options} />
      </section>
    </main>
  );
}
