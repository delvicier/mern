import {Form, Formik} from 'formik'
import {useNotas} from '../../context/NotasContext'
import {useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import './notasform.scss'

// Enviar los datos
function NotasForm() {

  const { crearNota, traerNota, actualizarNota } = useNotas();

  const [nota, setNota] = useState({
    titulo: "",
    descripcion: "",
  });

  const params = useParams();
  const navegar = useNavigate();

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
              await actualizarNota(params.id, values);
              navegar("/");
            } else{
              await crearNota(values);
            }
            actions.resetForm();
            // Para resetear el formulario
          }}>
            {/* Se creo una funcion que contendra a Form y tendra como parametros handleChange para capturar los input y handleSubmit para escuchar */}
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <span>Titulo</span>
                <input type="text" name='titulo' placeholder='Escribe un titulo' onChange={handleChange} value={values.titulo}/>

                <span>Descripción</span>

                <textarea type="text" name="descripcion" className='desc' cols="30" rows="10" placeholder='Puedes escribir aquí' 
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

export default NotasForm;