"use client";

import { ReactNode } from "react";
import { Card, Form, Radio } from "react-daisyui";

interface Props {
  onChange: (choice: string) => void;
  value: string;
  options: string[];
  heading: string;
  extra?: ReactNode;
}

export function Step({
  onChange,
  value,
  options,
  heading,
  extra = null,
}: Props) {
  return (
    <>
      <h1 className="text-xl mt-7 mb-3">{heading}</h1>
      <Card className="bg-base-100 shadow-md">
        <Card.Body>
          <Form>
            {options.map((option) => {
              return (
                <Form.Label key={option} title={option}>
                  <Radio
                    name="step1"
                    value={option}
                    checked={value === option}
                    onChange={(e) => onChange(e.target.value)}
                  />
                </Form.Label>
              );
            })}
          </Form>

          {extra}
        </Card.Body>
      </Card>
    </>
  );
}
