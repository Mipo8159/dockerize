import $api from "../../http";

export async function deleteTodo(id: number) {
  return $api.delete(`todos/${id}`);
}
