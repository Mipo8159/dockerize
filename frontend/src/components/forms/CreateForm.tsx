import React, { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { IFormField } from "../../interfaces/form-field.interface";
import FormInput from "./FormInput";

interface CreateFormProps {
  fields: IFormField[];
  action: (formData: Record<string, string>) => void;
  formBtn: ReactNode;
}

const CreateForm: React.FC<CreateFormProps> = ({ fields, formBtn, action }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    action(formData);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="p-2 border border-gray-300 m-5">
      {fields.map(({ label, type, placeholder, name }) => (
        <FormInput
          key={label}
          label={label}
          type={type}
          placeholder={placeholder}
          name={name}
          handleChange={handleChange}
        />
      ))}

      {formBtn}
    </form>
  );
};

export default CreateForm;
