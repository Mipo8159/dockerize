import React, { Fragment } from "react";
import useTodos from "../client/queries/useTodos";
import { TodoList } from "../components/todo/TodoList";
import CreateTodo from "../components/todo/CreateTodo";

const TodosPage: React.FC = () => {
  const { data, error, isLoading } = useTodos();

  if (error) return <h1>{error.message}</h1>;
  if (isLoading) return <h1>Loading</h1>;
  return (
    <Fragment>
      <TodoList todos={data} />
      <CreateTodo />
    </Fragment>
  );
};

export default TodosPage;
