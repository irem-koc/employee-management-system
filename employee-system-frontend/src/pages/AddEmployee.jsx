import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../services/addEmployee";

const AddEmployee = () => {
  const div = useRef(null);
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };
  const handleClear = () => {
    setEmployee({
      firstName: "",
      lastName: "",
      email: "",
    });
  };
  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const response = await addEmployee(employee);
      handleClear();
      navigate("/employeeList");
      div.current.scrollIntoView({ behavior: "smooth", block: "end" });
      console.log("response", response);
    } catch (error) {
      alert(error);
    }
  };
  console.log(employee);
  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl">
          <h1>Add New Employee</h1>
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
            onClick={handleAddEmployee}
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

export default AddEmployee;
