/* eslint-disable react/prop-types */
import { AiOutlineUserDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { deleteEmployee } from "../services/deleteEmployee";
import { useContext } from "react";
import { Context } from "../context/Context";
import { getAllEmployees } from "../services/getAllEmployees";
const EmployeeItem = ({ employee }) => {
  const { setData } = useContext(Context);
  const fetchData = async () => {
    const allData = await getAllEmployees();
    setData(allData);
  };
  const handleEdit = () => {};
  const handleDelete = async () => {
    await deleteEmployee(employee.id);
    fetchData();
  };
  return (
    <tr className="space-y-1" key={employee.id}>
      <td className="py-3 px-6">{employee.id}</td>
      <td className="py-3 px-6">{employee.firstName}</td>
      <td className="py-3 px-6">{employee.lastName}</td>
      <td className="py-3 px-6">{employee.email}</td>
      <td className="flex space-x-3 justify-end py-3 px-6">
        <span>
          <FaUserEdit onClick={handleEdit} size={20} />
        </span>
        <span>
          <AiOutlineUserDelete onClick={handleDelete} size={20} />
        </span>
      </td>
    </tr>
  );
};

export default EmployeeItem;
