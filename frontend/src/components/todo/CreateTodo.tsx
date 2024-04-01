import React from "react";
import { IFormField } from "../../interfaces/form-field.interface";
import CreateForm from "../forms/CreateForm";
import useCreateTodo from "../../client/mutations/useCreateTodo";

const CreateTodo: React.FC = () => {
  const { mutate } = useCreateTodo();
  const formFields: IFormField[] = [
    { label: "Title", name: "title", placeholder: "Todo title", type: "text" },
    {
      label: "Description",
      name: "description",
      placeholder: "Todo deescription",
      type: "text",
    },
  ];

  const formBtn = () => {
    return (
      <button type="submit" className="border border-gray-200 p-3 w-full">
        Create Todo
      </button>
    );
  };

  const onSubmit = (formData: Record<string, string>) => {
    const { title, description } = formData;
    mutate({ title, description });
  };

  return (
    <CreateForm action={onSubmit} fields={formFields} formBtn={formBtn()} />
  );
};

export default CreateTodo;
