import { api } from "../types/api";

export const updateEmployee = async (employee) => {
  try {
    const response = await api.put(`/employees/${employee.id}`, {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
    });
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
