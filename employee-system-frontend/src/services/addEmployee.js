import { api } from "../types/api";

export const addEmployee = async (employee) => {
  try {
    const response = await api.post("/employees", {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
    });
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
