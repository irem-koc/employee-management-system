import { api } from "../types/api";

export const getAllEmployees = async () => {
  try {
    const response = await api.get("/employees");
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
