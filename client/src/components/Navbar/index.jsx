import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={styles.container}>
          
            <div>
                <NavLink
                    exact
                    to="/home"
                    className={(isActive) =>
                        isActive ? styles.active : styles.inactive
                    }
                >
                    Inicio
                </NavLink>

                <NavLink
                    exact
                    to="/about"
                    className={(isActive) =>
                        isActive ? styles.active : styles.inactive
                    }
                >
                   Acerca
                </NavLink>
                <NavLink
                    exact
                    to="/"
                    className={(isActive) =>
                        isActive ? styles.active : styles.inactive
                    }
                >
                    Salir
                </NavLink>
            </div>
        </div>
    );
};
