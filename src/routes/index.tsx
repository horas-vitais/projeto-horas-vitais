import { Route, Routes } from "react-router-dom";
import ListaDeProfissionais from "../pages/DashboardOngs";
import { DashboardProfissionalSaude } from "../pages/DashboardProfissionalSaude";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil" element={<DashboardProfissionalSaude />} />
      <Route path="/dashboard" element={<ListaDeProfissionais />} />
    </Routes>
  );
};

export default RoutesMain;
