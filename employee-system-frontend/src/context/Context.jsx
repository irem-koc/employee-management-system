/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Context = createContext("");

const ContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [showSpinner, setShowSpinner] = useState(false);
  const values = {
    data,
    setData,
    showSpinner,
    setShowSpinner,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
