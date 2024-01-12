import { Route, Routes } from "react-router-dom";
import AddEmployee from "../components/AddEmployee";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AddEmployee />} />
    </Routes>
  );
};

export default AppRouter;
