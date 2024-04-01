import { useMutation } from "@tanstack/react-query";
import { client } from "../client";
import { deleteTodo } from "../../api/todo/deleteTodo";

const useDeleteTodo = () => {
  const result = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (err) => console.log(err),
  });
  return result;
};

export default useDeleteTodo;
