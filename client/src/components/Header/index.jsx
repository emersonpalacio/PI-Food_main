import React from 'react';
import { Navbar } from '../Navbar';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
 
            <div className={styles.image}>
                <div className={styles.header}><Navbar /></div>
            
                <img
                    src="https://i.ibb.co/8KdRdnt/cocina.png"
                    alt=""
                />
            </div>
        </header>
    );
};
