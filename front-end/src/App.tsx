import "./index.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./setup/routes-mangner/index";
import { Toaster } from "react-hot-toast";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Toaster />
        <AppRoutes />
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
