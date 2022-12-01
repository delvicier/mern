import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="registrar">
      <div className="card">
        <div className="left">
          <h1>Notas del Miau</h1>
          <p>El gato doméstico, llamado más comúnmente gato, y de forma coloquial minino o michi, es un mamífero carnívoro de la familia Felidae.</p>
          <span>Aun no has iniciado sesión?</span>
          <Link to="/login">
            <button type="submit">Iniciar Sesión</button>
          </Link>
        </div>
        <div className="right">
          <h1>Creando Cuenta</h1>
          <form>
            <input type="text" placeholder="Nombre y apellido"/>
            <input type="text" placeholder="Nombre de Usuario"/>
            <input type="email" placeholder="Correo electronico"/>
            <input type="password" placeholder="Contraseña"/>
            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register