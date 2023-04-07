import styles from './styles.module.scss'
import { CardInterface } from '@/Interfaces/card'
import Image from 'next/image'

const Page: React.FC<CardInterface>=({titulo, descripcion, icono}) => {
    return (
        <div className={styles.sectionCardContainer}>
            <div className={styles.sectionCardContent}>
                <div className='w-100'>
                    <i className={`${icono} ${styles.elementsIcon}`}></i>
                </div>
                <h2 className='w-100'>
                    {titulo} 
                </h2>
                <p className='w-100'>
                    {descripcion}
                </p>
                <p className='w-100'>
                    {icono}
                </p>
            </div>
        </div>
    )

}


export default Page