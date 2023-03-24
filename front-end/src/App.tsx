import "./index.css"
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./setup/routes-mangner/index";
import  { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
