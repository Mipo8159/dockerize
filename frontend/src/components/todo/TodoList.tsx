import React from "react";
import { ITodo } from "../../interfaces/todo.interface";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: ITodo[] | undefined;
}
export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos?.map(({ id, title, isCompleted, description }) => (
        <TodoItem
          key={id}
          id={String(id)}
          title={title}
          completed={isCompleted}
          description={description}
        />
      ))}
    </div>
  );
};
