import { CardInterface } from '@/Interfaces/card'
import Page from './page'

const CardComponent: React.FC<CardInterface>=({titulo, descripcion, icono}) => {
    return (
        <Page titulo={titulo} descripcion={descripcion} icono={icono} ></Page>
    )
}


export default CardComponent

//<CardComponent 
    //titulo= "titulo" 
    //descripcion= "descripcion" 
    //icono= "icono"></CardComponent>