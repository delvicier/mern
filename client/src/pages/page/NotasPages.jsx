import {useEffect} from 'react'
import CardNotas from '../../components/card/CardNotas'
import {useNotas} from '../../context/NotasContext'
import './notaspages.scss'

// Traer los datos
function NotasPages() {
  // Traemos el array de useState desde context
  const {notas, cargarNotas} = useNotas();

  // useEffect ejecuta este codigo apenas entremos a la pagina, en este caso le indicamos cargar las notas desde el context
  useEffect(() => {
    cargarNotas()
  }, [])
  // Arreglo de dependencias

  // Renderiza el componente CardNotas.jsx
  function renderMain() {
    if (notas.length === 0) {return <h1>No hay notas</h1>
  } // Recorrer el array del useState
    return notas.map( nota => <CardNotas nota={nota} key={nota.id}/>);
  }

  return (
    <div className='pages'>
      <div className="container">
        <div className="item">
          <h2>Notas</h2>
          {renderMain()}
        </div>
      </div>
    </div>
  )
}

export default NotasPages