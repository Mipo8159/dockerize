import React from "react";
import { IFormField } from "../../interfaces/form-field.interface";

const FormInput: React.FC<IFormField> = ({
  label,
  name,
  type,
  placeholder,
  handleChange,
}) => {
  return (
    <div className="w-full flex flex-col mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        className="border border-gray-200 p-3"
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
