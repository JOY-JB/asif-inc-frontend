"use client"


import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({
  name,
  value,
  placeholder,
  label,
  defaultValue,
  required = false,
  disabled = false,
}) => {
  const { control } = useFormContext();

  return (
    <div style={{ marginBottom: "20px" }}>
      {label && <label>{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <Input
            type="text"
              size="large"
              disabled={disabled}
              placeholder={placeholder}
              required={required}
              {...field}
              defaultValue={defaultValue}
              value={value ? value : field.value}
            />
          );
        }}
      />
    </div>
  );
};

export default FormInput;
