import styles from './styles.module.css'

import CardFormulario from '../CardFormulario'
import { FormularioInterface } from '@/Interfaces/userFormulario'

const users = [
  {
      titulo: "Nombre", 
      descripcion: "Telefono",
      icono: "Email"},
  ]

export default function Page() {

    //class='estilo' convencional
    //className='estilos' javascript
  return ( //Objeto JSX 



    <>
      <div className={styles.containerMain}>
        <div className={styles.containerContent}>
        <div>
          <div>
            <p>ESTO ES EL FORMULARIO</p>
          </div>
          <br></br>
          <br></br>

          <div className={styles.cardslayout}>
          {users.map(user =>  (<CardFormulario titulo = {user.titulo} descripcion = {user.descripcion} icono={user.icono} ></CardFormulario>))}
          
          </div>

          </div>
        </div>
      </div>
    </>
  )
}