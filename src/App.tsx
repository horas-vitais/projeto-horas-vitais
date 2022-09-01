<<<<<<< HEAD
import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Login } from './pages/Login';
import 'react-toastify/dist/ReactToastify.min.css'

=======
import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
>>>>>>> e7e5ac672e18b06d4099451f6bc2df2967da437d

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
<<<<<<< HEAD
        <ToastContainer
          theme='colored'
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
=======
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
>>>>>>> e7e5ac672e18b06d4099451f6bc2df2967da437d
      </header>
      <Footer />
    </div>
  );
}

export default App;
