import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import useDeleteTodo from "../../client/mutations/useDeleteTodo";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  description: string;
}
const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  description,
}) => {
  const { mutate } = useDeleteTodo();
  const navigate = useNavigate();

  const deleteTodo = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    mutate(id);
  };

  return (
    <div
      onClick={() => navigate(`/todos/${id}`)}
      className="border border-gray-200 text-red-400 cursor-pointer relative"
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{completed}</h4>

      <button
        onClick={(e) => deleteTodo(e, Number(id))}
        className="absolute top-1 right-4 text-red-700 cursor-pointer border border-gray-300 p-1"
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
