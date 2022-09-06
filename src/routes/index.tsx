import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import ListaDeProfissionais from "../pages/DashboardOngs";
import { DashboardProfissionalSaude } from "../pages/DashboardProfissionalSaude";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
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
      </Route>
    </Routes>
  );
};

export default RoutesMain;
