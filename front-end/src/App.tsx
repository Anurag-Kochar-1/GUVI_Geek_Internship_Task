import "./index.css"
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./setup/routes-mangner/index";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
