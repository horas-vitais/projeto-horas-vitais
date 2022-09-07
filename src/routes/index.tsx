import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";

import ListaDeProfissionais from "../pages/DashboardOngs";
import { DashboardProfissionalSaude } from "../pages/DashboardProfissionalSaude";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import Page404 from "../pages/Page404";
import { PerfilDoProfissional } from "../pages/PerfilDoProfissional";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register/:ong" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes/>} >
        <Route path="/perfil" element={<DashboardProfissionalSaude />} />
        <Route path="/dashboard" element={<ListaDeProfissionais />} />
        <Route path="/visualizarPerfil/:id" element={<PerfilDoProfissional />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default RoutesMain;
