import React from 'react';
import { Footer, Navbar } from '../../components';

import styles from './AboutPage.module.css';

export const AboutPage = () => {
    return (
        <>
            <Navbar />
            <section className={styles.section}>
                <h1>Acerca de mi</h1>
            </section>
            <section className={styles.section}>
                <div className={styles.aboutMe}>
                    
                    <p className={styles.text}>
                    Front-end y back-end desarrollador | Javascript | React | Nod.js|C#
                   .NetCore | Programacion funciona en js, nod.js, desarrollador full stack en
                   js, nod.js y libreria react.
                    </p>
                </div>
            </section>
      
            <Footer />
        </>
    );
};
