import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800">
      <div className="h-16 flex items-center px-8 space-x-5">
        <Link to="/" className=" text-white font-bold">
          Employee Management System
        </Link>
        <Link className="text-white" to="/addEmployee">
          {" "}
          Add Employee{" "}
        </Link>
        <Link className="text-white" to="/employeeList">
          {" "}
          Employee List{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
