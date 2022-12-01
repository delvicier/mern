import './leftbar.scss'
import Friends from "../../assets/1.png"
import Groups from "../../assets/2.png"
import Market from "../../assets/3.png"
import Watch from "../../assets/4.png"
import Memories from "../../assets/5.png"
import Events from "../../assets/6.png"
import Gaming from "../../assets/7.png"
// import Gallery from "../../assets/8.png"
import Videos from "../../assets/9.png"
import Messages from "../../assets/10.png"
import Tutorials from "../../assets/11.png"
import Courses from "../../assets/12.png"
import Fund from "../../assets/13.png"

import { AuthContext } from '../../context/authContext'
import { useContext } from 'react';

function LeftBar() {
  const {currentUser} = useContext (AuthContext);

  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">

          <div className="user">
            <img src={currentUser.foto} alt='foto'/>
            <span>{currentUser.name}</span>
          </div>

          <div className="item">
            <img src={Friends} alt="Amigo" />
            <span>Amigos</span>
          </div>
          <div className="item">
            <img src={Groups} alt="Grupos" />
            <span>Grupos</span>
          </div>
          <div className="item">
            <img src={Market} alt="Market" />
            <span>Mercado</span>
          </div>
          <div className="item">
            <img src={Watch} alt="Watch" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="Recuerdos" />
            <span>Recuerdos</span>
          </div>

        </div>

        <hr />

        <div className="menu">
          <span>Acesos directos</span>

          <div className="item">
            <img src={Events} alt="eventos" />
            <span>Eventos</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="Gaming" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Videos} alt="Videos" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="Mensajes" />
            <span>Mensajes</span>
          </div>
        </div>

        <hr />
        
        <div className="menu">
          <span>Otros</span>

          <div className="item">
            <img src={Fund} alt="Fund" />
            <span>Fund</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="Tutoriales" />
            <span>Tutoriales</span>
          </div>
          <div className="item">
            <img src={Courses} alt="Cursos" />
            <span>Cursos</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LeftBar