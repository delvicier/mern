import './App.scss'
import NotasPages from './pages/page/NotasPages'
import NotasEdit from './pages/formedit/NotasEdit'
import NotasForm from './pages/form/NotasForm'
import NotFound from './pages/error/NotFound.jsx'
import Navbar from './components/navbar/Navbar'
import Register from './pages/register/Register'
import Login from './pages/login/Login'

import { DarkModeContext } from './context/DarkModeContext';
import { useContext } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  
  const { darkMode } = useContext (DarkModeContext);

  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
          <NotasPages/>
        </div>
      </div>
    );
  };

  const LayoutCrear = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
          <NotasPages/>
          <NotasForm/>
        </div>
      </div>
    );
  };

  const LayoutEdit = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
          <NotasPages/>
          <NotasEdit/>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
    },
    {
      path: "/new",
      element: <LayoutCrear/>,
    },
    {
      path: "/edit/:id",
      element: <LayoutEdit/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/*",
      element: <NotFound/>,
    },
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App