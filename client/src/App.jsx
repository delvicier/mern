import './App.scss'
import { Route, Routes } from 'react-router-dom'
import NotasPages from './pages/page/NotasPages'
import NotasEdit from './pages/formedit/NotasEdit'
import NotasForm from './pages/form/NotasForm'
import NotFound from './pages/error/NotFound.jsx'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return(
      <div>
        <Navbar/>
        <div style={{display: "flex"}}>
          <NotasPages/>
        </div>
      </div>
    );
  };

  const LayoutCrear = () => {
    return(
      <div>
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
      <div>
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