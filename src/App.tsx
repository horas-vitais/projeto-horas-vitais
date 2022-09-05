import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ListaDeProfissionais from "./pages/DashboardOngs";
import { DashboardProfissionalSaude } from "./pages/DashboardProfissionalSaude";
import { Login } from "./pages/Login";
import { ProfissionalProvider } from "./Providers/contextProfissional";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ProfissionalProvider>
        <DashboardProfissionalSaude />
        <Login />
        <Routes />
        <ListaDeProfissionais />
      </ProfissionalProvider>
    </div>
  );
}

export default App;
