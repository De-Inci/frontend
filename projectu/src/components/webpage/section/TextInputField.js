import React from "react";
import { Form } from "react-bootstrap";

const TextInputField = ({
  label,
  name,
  type,
  value,
  onChange,
  controlId,
  groupClass,
  labelClass,
  controlClass,
  required = false,
  placeholder = "",
}) => {
  return (
    <Form.Group controlId={controlId} className={groupClass}>
      <Form.Label className={labelClass}>
        {label} {required && <span>*</span>}
      </Form.Label>
      <Form.Control
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={controlClass}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

export default TextInputField;
