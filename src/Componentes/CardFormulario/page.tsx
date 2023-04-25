import styles from './styles.module.scss'
import { UserInterface } from '@/Interfaces/user'
import React, { useRef } from 'react';

const Page: React.FC<UserInterface>=({titulo, descripcion, icono}) => {
    const inputRef = useRef(2);

    const handleClick = () => {
        alert(inputRef.current.value)
    }

    return (
        <div className={styles.containerCardTest}>
            <div className={styles.contentCardTest}>

                <p className={styles.headerCard}>{titulo}</p>
                <input type="text" ref={inputRef}/>
                <button onClick={handleClick}>enviar</button>
                <p className={styles.cardBody}>{descripcion}</p>
                <input type="text" ref={inputRef}/>
                <button onClick={handleClick}>enviar</button>
                <p className={styles.cardBody2}>{icono}</p>
                <input type="text" ref={inputRef}/>
                <button onClick={handleClick}>enviar</button>
            </div>
        </div>
    )
}


export default Page