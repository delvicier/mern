import { DarkModeContext } from '../../context/DarkModeContext';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import {Link} from 'react-router-dom'
import './navbar.scss'


function Navbar() {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (

    <div className="navbar">
      <div className='left'>

          <div className="logo">
            <img src="https://m.media-amazon.com/images/I/61UpNgle6LL.png" alt="logo" />
          </div>

          <Link to="/" style={{ textDecoration: "none"}}>
            <span>Inicio</span>
          </Link>

          <Link to="/new" style={{ textDecoration: "none"}}>
            <span>Crear nota</span>
          </Link>

          <Link to="/login" style={{ textDecoration: "none"}}>
            <span>Login</span>
          </Link>

            {darkMode ? (
          <LightModeIcon onClick={toggle}/> 
          ) : (
          <DarkModeIcon onClick={toggle}/>
          )}

      </div>

      <div className="right">

        <div className="user">
          <img src={currentUser.foto} alt='foto'/>
          <span>{currentUser.name}</span>
        </div>

      </div>

    </div>

  )
}

export default Navbar