"use Client"

import { Input } from 'antd';
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({
    name,
    value,
    placeholder,
    label,
  }) => {

    const { control } = useFormContext()

    return (
        <div style={{marginBottom: "20px"}}>
        {label && <label>{label}</label>}
         <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input size="large" placeholder={placeholder} {...field}
          value={value ? value : field.value} />
        )}
      />
   
        </div>
    );
};

export default FormInput;