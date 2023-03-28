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
          <br></br>
          <br></br>

          <div className={styles.cardslayout}>
            <div className= {styles.cardDiv}>
              <h1 className={styles.headerCard}>
                Card 1
              </h1>
              <p>Description 1</p>
            </div>

            <div className= {styles.cardDiv}>
            <h1 className={styles.headerCard}>
                Card 2
              </h1>
              <p>Description 2</p>
            </div>

            <div className= {styles.cardDiv}>
            <h1 className={styles.headerCard}>
                Card 3
              </h1>
              <p>Description 3</p>
            </div>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}