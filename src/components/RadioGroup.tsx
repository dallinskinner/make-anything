"use client";

import { Form, Radio } from "react-daisyui";

interface Props {
  onChange: (choice: string) => void;
  value: string;
  name: string;
  options: string[];
}

export function RadioGroup({ onChange, value, options, name }: Props) {
  return options.map((option) => {
    return (
      <Form.Label key={option} title={option}>
        <Radio
          name={name}
          value={option}
          checked={value === option}
          onChange={(e) => onChange(e.target.value)}
        />
      </Form.Label>
    );
  });
}
