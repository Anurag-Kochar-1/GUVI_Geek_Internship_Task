import "./index.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./setup/routes-mangner/index";
import { Toaster } from "react-hot-toast";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";
import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <BaseLayout>
          <Toaster />
          <AppRoutes />
        </BaseLayout>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
