import React from "react";
import useTodo from "../client/queries/useTodo";
import { useParams } from "react-router-dom";

const Todopage: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useTodo(id!);

  if (error) return <h1>{error.message}</h1>;
  if (isLoading) return <h2>Loading</h2>;
  return (
    <div className="border border-gray-200 text-red-400">
      <h3>{data?.title}</h3>
      <h4>{data?.isCompleted ? "done" : "pending"}</h4>
      <p>{data?.description}</p>
    </div>
  );
};

export default Todopage;
