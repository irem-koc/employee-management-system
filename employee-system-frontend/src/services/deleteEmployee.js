import { api } from "../types/api";

export const deleteEmployee = async (id) => {
  try {
    const response = await api.delete(`/employees/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
