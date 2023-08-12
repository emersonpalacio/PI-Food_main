import React from 'react';
import { Link } from 'react-router-dom';
import imgDog from "../../image/uno.jpg";
import styles from './LandingPage.module.css';

export const LandingPage = () => {
    return (
        <>        
            <div className={styles.backGround}>
                <Link to="/home" className={styles.link}>
                    
                INICIO
                <img className={styles.pokeBola} alt="pokeBola"  src={imgDog}/>
                </Link>
            </div>
        </>
        
        // <main className={styles.main}>
        //     <section className={styles.section}>
        //         <div className={styles.title}>
        //             <h1>MY</h1>
        //             <h2>RESTAURANTE</h2>
        //         </div>
        //         <div className={styles.summary}>
        //             <div>
        //                 <p>
        //                     Entra y prueba nuestras delicias culinarias
        //                 </p>
        //                 <Link to="/home" className={styles.link}>Entrar</Link>
        //             </div>
        //         </div>
        //     </section>
        //     <section className={styles.sectionImg}>
        //         <img
        //             className={styles.img}
        //             src=""
        //             alt=""
        //         />
        //     </section>
        // </main>
    );
};
