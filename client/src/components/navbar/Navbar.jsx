import {Link} from 'react-router-dom'
import './navbar.scss'

function Navbar() {
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
              <span>Iniciar sesion</span>
            </Link>

            <Link to="/register" style={{ textDecoration: "none"}}>
              <span>Registrarse</span>
            </Link>

      </div>
    </div>

  )
}

export default Navbar