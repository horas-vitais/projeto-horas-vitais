import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import GlobalStyle from "./styles/global";
=======
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "./contexts/contextLogin";
>>>>>>> f58e8ad61bbce1f88b8c2bb9dd470f5593b076a1

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <GlobalStyle/>
        <App />
    </BrowserRouter>
=======
    <ContextProvider>
      <App />
    </ContextProvider>
>>>>>>> f58e8ad61bbce1f88b8c2bb9dd470f5593b076a1
  </React.StrictMode>
);
reportWebVitals();
