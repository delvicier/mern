import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {NotasContextProvider} from "./context/NotasContext"
import {DarkModeContextProvider} from "./context/DarkModeContext"
import { AuthContextProvider } from './context/AuthContext';

 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NotasContextProvider>
        <AuthContextProvider>
          <DarkModeContextProvider>
            <App />
          </DarkModeContextProvider>
        </AuthContextProvider>
      </NotasContextProvider>
  </React.StrictMode>
);
