import { Route, Routes } from "react-router-dom";
import ListaDeProfissionais from "../pages/DashboardOngs";
import { DashboardProfissionalSaude } from "../pages/DashboardProfissionalSaude";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import Page404 from "../pages/Page404";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register/:ong" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil" element={<DashboardProfissionalSaude />} />
      <Route path="/dashboard" element={<ListaDeProfissionais />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default RoutesMain;
