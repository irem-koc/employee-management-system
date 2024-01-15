import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ContextProvider from "./context/Context";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <AppRouter />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
