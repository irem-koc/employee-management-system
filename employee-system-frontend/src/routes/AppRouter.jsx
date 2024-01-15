import { Route, Routes } from "react-router-dom";
import AddEmployee from "../pages/AddEmployee";
import EmployeeList from "../pages/EmployeeList";
import Homepage from "../pages/Homepage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/addEmployee" element={<AddEmployee />} />
      <Route path="/employeeList" element={<EmployeeList />} />
    </Routes>
  );
};

export default AppRouter;
