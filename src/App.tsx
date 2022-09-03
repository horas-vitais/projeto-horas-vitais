import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListaDeProfissionais from "./pages/DashboardOngs";
import { DashboardProfissionalSaude } from "./pages/DashboardProfissionalSaude";
import { Login } from "./pages/Login";
import { ProfissionalProvider } from "./Providers/contextProfissional";

function App() {
  return (
    <div className="App">
      <ProfissionalProvider>
        <DashboardProfissionalSaude />
      </ProfissionalProvider>
    </div>
  );
}

export default App;
