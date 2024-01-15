/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeItem from "../components/EmployeeItem";
import Spinner from "../components/Spinner";
import { Context } from "../context/Context.jsx";
import { getAllEmployees } from "../services/getAllEmployees";
const EmployeeList = () => {
  const { data, setData, showSpinner, setShowSpinner } = useContext(Context);
  const fetchData = async () => {
    const allData = await getAllEmployees();
    setData(allData);
  };
  useEffect(() => {
    setShowSpinner(true);
    fetchData();
  }, []);
  return (
    <div className="container my-8 mx-auto ">
      <div className="h-12">
        <Link to="/addEmployee">
          <button className="rounded bg-slate-600 text-white px-6 py-2">
            Add Employee
          </button>
        </Link>
      </div>
      <div className="flex shadow border">
        <table className="min-w-full">
          <thead className="bg-purple-50">
            <tr>
              <th className="text-left py-3 px-6 font-big text-blue-800 uppercase tracking-wider">
                Id
              </th>
              <th className="text-left py-3 px-6 font-big text-blue-800 uppercase tracking-wider">
                First Name
              </th>
              <th className="text-left py-3 px-6 font-big text-blue-800 uppercase tracking-wider">
                Last Name
              </th>
              <th className="text-left py-3 px-6 font-big text-blue-800 uppercase tracking-wider">
                Email Name
              </th>
              <th className="text-right py-3 px-6 font-big text-blue-800 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          {showSpinner ? (
            <tbody>
              <tr>
                <td className="py-3 px-6 text-center" colSpan="5">
                  <span className="text-red-600">
                    <Spinner
                      className="mx-auto flex justify-center items-center"
                      setShowSpinner={setShowSpinner}
                    />
                  </span>
                </td>
              </tr>
            </tbody>
          ) : data?.length > 0 ? (
            <tbody>
              {data?.map((employee) => (
                <EmployeeItem key={employee.id} employee={employee} />
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td className="py-3 px-6 text-center" colSpan="5">
                  <span className="text-red-600">No data found</span>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
