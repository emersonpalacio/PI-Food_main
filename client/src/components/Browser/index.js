import React from 'react';

import styles from './Browser.module.css';
//area de seach create y numeración
export const Browser = ({ children }) => {
    return <section className={styles.browser}>{children}</section>;
};
