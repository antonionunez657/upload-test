import styles from './styles.module.scss'
import { UserInterface } from '@/Interfaces/user'
import React, { useState } from 'react';

const Page: React.FC<UserInterface>=({titulo, descripcion, icono}) => {

   // const [counter, setCounte] = useState(0);
    const [nombre, setNombre] = useState(0)
    const [telefono, settelefono] = useState(0)
    const [email, setemail] = useState(0)


    return (
        <div className={styles.containerCardTest}>
            <div className={styles.contentCardTest}>

                <p className={styles.headerCard}>{titulo}</p>
                    
                    <input type="name" id="name" placeholder="Introduce tu nombre" required />
                    

                <p className={styles.cardBody}>{descripcion}</p>
                    <input type="telefono" id="telefono" placeholder="Introduce tu telefono" required />
          
                
                <p className={styles.cardBody2}>{icono}</p>
                    <input type="email" id="email" placeholder="Introduce tu email" required />
                    
                <input type="submit" value="Enviar" class="submit-btn" />
            
            </div>
        </div>
    )
}


export default Page