import {
  ChangeEventHandler,
  HTMLAttributes,
  HTMLInputTypeAttribute,
} from "react";
import { Form, Input } from "react-daisyui";

interface Props {
  title: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

export function TextInput({
  title,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
}: Props) {
  return (
    <Form.Label title={title}>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        type={type}
        placeholder={placeholder}
      />
    </Form.Label>
  );
}
