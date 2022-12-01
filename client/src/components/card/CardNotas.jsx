import {useNotas} from '../../context/NotasContext'
import {useNavigate} from 'react-router-dom'
import './cardnotas.scss'

function CardNotas({nota}) {

  const {eliminarNotas, cambiarVisto } = useNotas()
  const navegar = useNavigate()

  const visto = async () => {
    await cambiarVisto(nota.id)
  }

  return (
    <div className='cardnotas'>
      <div className="container">
        <div className="left">

          <div className="derecha">.</div>

          <div className="botones">

            <button onClick={() => eliminarNotas(nota.id)}>Eliminar
            </button>

            <button onClick={() => navegar(`/edit/${nota.id}`)}>Editar
            </button>

            <button onClick={() => visto(nota.realizado)}>visto
            </button>

          </div>
        
          <h3>{nota.titulo}</h3>
          <p>{nota.descripcion}</p>
          <span>{nota.realizado == 1 ? "✅" : "❌" }</span>
          <span>{nota.fecha}</span>


        </div>

        {/* <div className="rigth">

          <button onClick={() => eliminarNotas(nota.id)}>Eliminar
          </button>

          <button onClick={() => navegar(`/edit/${nota.id}`)}>Editar
          </button>

          <button onClick={() => visto(nota.realizado)}>visto
          </button>

        </div> */}

      </div>
    </div>
  )
}

export default CardNotas;