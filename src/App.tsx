import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Login } from './pages/Login';
import 'react-toastify/dist/ReactToastify.min.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
