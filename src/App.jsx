import './App.css'
import FetchMainComponent from './components/FetchMainComponent/FetchMainComponent'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <FetchMainComponent></FetchMainComponent>
      <ToastContainer />
    </div>
  )
}

export default App
