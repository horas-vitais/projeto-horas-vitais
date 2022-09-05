import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "./contexts/contextLogin";
import Home from "./pages/Home";
import App from "./App";
import RoutesMain from "./routes";
import { ProfissionalProvider } from "./Providers/contextProfissional";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer />
        <ProfissionalProvider>
          <RoutesMain />
        </ProfissionalProvider>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
reportWebVitals();
