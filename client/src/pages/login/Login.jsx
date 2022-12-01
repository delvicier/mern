import { Link } from "react-router-dom"
import "./login.scss"


const Login = () => {


  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hola miau.</h1>
          <p>El gato doméstico, llamado más comúnmente gato, y de forma coloquial minino o michi, es un mamífero carnívoro de la familia Felidae.</p>
          <span>Aun no te has registrado?</span>
          <Link to="/register">
            <button type="submit">Registrarse</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Nombre de Usuario"/>
            <input type="password" placeholder="Contraseña" />
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login