import $api from "../../http";
import { ITodo } from "../../interfaces/todo.interface";

export default async function createTodo(data: Partial<ITodo>) {
  const res = await $api.post("todos", { todo: { ...data } });
  return res.data;
}
