import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
