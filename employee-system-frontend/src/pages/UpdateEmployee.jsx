import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee } from "../services/getEmployee";
import { updateEmployee } from "../services/updateEmployee";

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  console.log("employee", employee);
  const fetchData = async () => {
    const employee = await getEmployee(id);
    setEmployee(employee);
    return employee;
  };
  useEffect(() => {
    const data = fetchData();
    setEmployee(data);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };
  const handleEditEmployee = async () => {
    const updated = await updateEmployee(employee);
    console.log("al işte", updated);
    navigate("/employeeList");
  };
  const handleClear = () => {
    setEmployee({
      firstName: "",
      lastName: "",
      email: "",
    });
  };
  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl">
          <h1>Edit Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label
            className="block text-gray-600 text-sm font-normal"
            htmlFor="name"
          >
            First Name
          </label>
          <input
            onChange={handleChange}
            name="firstName"
            value={employee.firstName}
            type="text"
            className="h-10 w-96 border mt-2 p-2 outline-none"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label
            className="block text-gray-600 text-sm font-normal"
            htmlFor="lastname"
          >
            Last Name
          </label>
          <input
            onChange={handleChange}
            name="lastName"
            value={employee.lastName}
            type="text"
            className="h-10 w-96 border mt-2 p-2 outline-none"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label
            className="block text-gray-600 text-sm font-normal"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            value={employee.email}
            type="email"
            className="h-10 w-96 border mt-2 p-2 outline-none"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={handleEditEmployee}
            className="rounded text-white  font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
          >
            Save
          </button>
          <button
            onClick={() => handleClear()}
            className="rounded text-white  font-semibold bg-red-400 py-2 px-6 hover:bg-red-700"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
