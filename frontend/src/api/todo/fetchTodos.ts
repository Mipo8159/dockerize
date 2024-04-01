import $api from "../../http";

export async function fetchTodos() {
  const res = await $api.get("/todos");
  return res.data;
}
