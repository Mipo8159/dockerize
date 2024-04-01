import { useMutation } from "@tanstack/react-query";
import { ITodo } from "../../interfaces/todo.interface";
import createTodo from "../../api/todo/createTodo";
import { client } from "../client";

const useCreateTodo = () => {
  const result = useMutation({
    mutationFn: (data: Partial<ITodo>) => createTodo(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (err) => console.log(err),
  });
  return result;
};

export default useCreateTodo;
