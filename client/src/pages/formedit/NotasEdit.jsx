import {Form, Formik} from 'formik'
import {useNotas} from '../../context/NotasContext'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import './notasedit.scss'

// Enviar los datos
function NotasEdit() {

  const { crearNota, traerNota, actualizarNota } = useNotas();

  const [nota, setNota] = useState({
    titulo: "",
    descripcion: "",
  });
  const params = useParams();

  useEffect(() => {
    const cargarNota = async () => {
      if (params.id) {
       const nota = await traerNota(params.id);
       setNota({
        titulo: nota.titulo,
        descripcion: nota.descripcion,
       });
      }
    };
    cargarNota();
  },[]);
  // Arreglo de dependencias

  return (
    <div className='formnotas'>
      <div className="container">
        <div className="right">

      <h1>
        {params.id ? "Editar Nota" : "Creando Nota"}
      </h1>

      <Formik 
      initialValues={nota} 
      enableReinitialize={true}
      onSubmit={async(values, actions) => {
        console.log(values)

        if (params.id) {
          await actualizarNota(params.id, values)
        } else{
          await crearNota(values);
        }
        setNota({
          titulo: nota.titulo,
          descripcion: nota.descripcion,
         });
        // Para resetear el formulario

      }}>
        {/* Se creo una funcion que contendra a Form y tendra como parametros handleChange para capturar los input y handleSubmit para escuchar */}
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Titulo</label>
            <input type="text" name='titulo' placeholder='Escribe un titulo' onChange={handleChange} value={values.titulo}/>

            <label>Descripción</label>

            <textarea name="descripcion" className='desc' cols="40" rows="20" placeholder='Puedes escribir aquí' 
            onChange={handleChange} value={values.descripcion}>
            </textarea>

            <button type='submit'disabled={isSubmitting}>
              {isSubmitting ? "Guardando.."  : "Guardar"}
            </button>

          </Form>
        )}

      </Formik>

        </div>
      </div>
    </div>
  )
}

export default NotasEdit;