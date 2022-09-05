import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "./contexts/contextLogin";
import RoutesMain from "./routes";
import { ProfissionalProvider } from "./Providers/contextProfissional";
import { ToastContainer } from "react-toastify";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <GlobalStyle />
        <ToastContainer />
        <ProfissionalProvider>
          <App></App>
        </ProfissionalProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
