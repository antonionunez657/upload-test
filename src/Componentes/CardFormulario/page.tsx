import styles from './styles.module.scss'
import { UserInterface } from '@/Interfaces/user'
import React, { useState } from 'react';

const Page =() => {

    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")

    const subir=(event:any)=>{
        let datasend={nombre, telefono, email}
        console.log('Probando funcionamiento: ', datasend)
        //api-POST /users {nombre: "Juan"}
        //api-post /users {user, user2, user3}
        event.preventDefault()

    }

    return (
        <div className={styles.containerCardTest}>
            <div className={styles.contentCardTest}>

                <>
                    <form onSubmit={(e)=>subir(e)}>
                        <label>
                            Nombre: 
                            <input type="text" name="Nombre" placeholder="Introduce tu nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                        </label>
                        <label>
                            Telefono: 
                            <input type="text" name="Telefono" placeholder="Introduce tu telefono" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
                        </label>
                        <label>
                            Email: 
                            <input type="text" name="Email" placeholder="Introduce tu email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </label>

                        <input type="submit" value="Submit" />
                    </form>
                </>
            
            </div>
        </div>
    )
}

export default Page






/*
<p className={styles.headerCard}>{titulo}</p>
                    
<input type="name" id="name" placeholder="Introduce tu nombre" required />


<p className={styles.cardBody}>{descripcion}</p>
<input type="telefono" id="telefono" placeholder="Introduce tu telefono" required />


<p className={styles.cardBody2}>{icono}</p>
<input type="email" id="email" placeholder="Introduce tu email" required />


<input type="submit" value="Enviar" class="submit-btn" />
*/