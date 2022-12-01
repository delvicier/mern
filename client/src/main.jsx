import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import {NotasContextProvider} from "./context/NotasContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotasContextProvider>

        <App />

    </NotasContextProvider>
  </React.StrictMode>
);