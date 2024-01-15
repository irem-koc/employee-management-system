import { api } from "../types/api";

export const getEmployee = async (id) => {
  try {
    const response = await api.get(`/employees/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
