import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ListaDeProfissionais from "./pages/DashboardOngs";
import { DashboardProfissionalSaude } from "./pages/DashboardProfissionalSaude";
import { Login } from "./pages/Login";
import { ProfissionalProvider } from "./Providers/contextProfissional";

import React from "react";
import RoutesMain from "./routes";


function App() {
  return (
    <div className="App">
      <RoutesMain></RoutesMain>
    </div>
  );
}

export default App;
