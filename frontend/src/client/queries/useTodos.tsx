import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../../api/todo/fetchTodos";
import { ITodo } from "../../interfaces/todo.interface";

const useTodos = () => {
  const result = useQuery<ITodo[]>({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(),
  });

  return result;
};

export default useTodos;
