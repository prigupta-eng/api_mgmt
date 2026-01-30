import { apiClient } from "../api/apiClient";

export  async function getUsers() {
  return await apiClient("/users");
}

export async function getUserById(id) {
  return  await apiClient(`/users/${id}`);
}
