import styles from './styles.module.css'

export default function Page() {
    //class='estilo' convencional
    //className='estilos' javascript
  return ( //Objeto JSX 
    <>
      <div className={styles.containerMain}>
        <div className={styles.containerContent}>
        <div>
          <div>
            <p>Descripcion: Esta es una pagina de prueba</p>
          </div>

          <div className={styles.cardslayout}>
            <p>Card 1</p>
            <p>Card 2</p>
            <p>Card 3</p>
          </div>

          <div className={styles.cardsdescription}>
            <p>Descripcion 1</p>
            <p>Descripcion 2</p>
            <p>Descripcion 3</p>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}