import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "./contexts/contextLogin";
import Home from "./pages/Home";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Home></Home>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
reportWebVitals();
