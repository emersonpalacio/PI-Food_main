import React from 'react';

import styles from './NoExist.module.css';
export const NoExist = () => {
    return (
        <div className={styles.container}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                width="200px"
                height="200px"
                viewBox="0 0 64 64"
            >
                <g id="cry">
                    <circle cx="59" cy="47" r="1" />

                    <path d="M6.7,14.4561a1,1,0,0,0-1.4141,0l-.7668.7669-.7669-.7669a1,1,0,1,0-1.414,1.414l.7669.7671-.7669.7671a1,1,0,1,0,1.414,1.4141l.7669-.767.7668.767A1,1,0,1,0,6.7,17.4043l-.767-.7671L6.7,15.87A1,1,0,0,0,6.7,14.4561Z" />

                    <path d="M46.5388,53.0841a23.99,23.99,0,1,0-19.4467,4.41C28.2607,60.8948,41.4351,61,43,61c1.6377,0,16-.1123,16-4C59,54.0815,51.0566,53.2957,46.5388,53.0841ZM10,34A22,22,0,1,1,45.28,51.5287a22.7962,22.7962,0,0,0-2.25-3.3544,1.0347,1.0347,0,0,0-1.5606,0c-.6968.87-2.97,3.8408-2.97,5.5757a3.7,3.7,0,0,0,.2108,1.187A21.961,21.961,0,0,1,10,34ZM40.5,53.75a9.52,9.52,0,0,1,1.7505-3.2891A9.5,9.5,0,0,1,44,53.75a1.75,1.75,0,0,1-3.5,0Z" />

                    <path d="M53,15a3,3,0,1,0-3-3A3.0033,3.0033,0,0,0,53,15Zm0-4a1,1,0,1,1-1,1A1.0013,1.0013,0,0,1,53,11Z" />

                    <path d="M23.9689,37.9731c.1756.0143.3518.0269.5311.0269A6.5075,6.5075,0,0,0,31,31.5V27.1772a1,1,0,0,0-.62-.9248l-2.8623-1.1772a1.0059,1.0059,0,0,0-.5738-.0562l-8.1377,1.6055a1,1,0,0,0-.8066.981V31.5a6.4734,6.4734,0,0,0,1.83,4.51c-.9393,1.2712-2.33,3.379-2.33,4.74a3.75,3.75,0,0,0,7.5,0A6.3412,6.3412,0,0,0,23.9689,37.9731ZM20,28.4272l2-.3944V31.5a2.5,2.5,0,0,0,5,0V27.0466l.0356-.007L29,27.8472V31.5A4.505,4.505,0,0,1,24.5,36a4.4572,4.4572,0,0,1-2.36-.6857c-.0345-.0435-.0806-.1036-.11-.14a.9229.9229,0,0,0-.4637-.29A4.4715,4.4715,0,0,1,20,31.5Z" />

                    <path d="M39.5,38A6.5075,6.5075,0,0,0,46,31.5V27.6055a1,1,0,0,0-.8066-.981L37.0552,25.019a.9912.9912,0,0,0-.5738.0562L33.62,26.2524a1,1,0,0,0-.62.9248V31.5A6.5075,6.5075,0,0,0,39.5,38ZM35,27.8472l1.9639-.8076L37,27.0467V31.5a2.5,2.5,0,0,0,5,0V28.0328l2,.3944V31.5a4.5,4.5,0,0,1-9,0Z" />

                    <path d="M36.6284,44.9287a1.0061,1.0061,0,0,0,.8535-.0522l2-1.1a1,1,0,1,0-.9638-1.753l-1.5855.8721-4.561-1.8247a1.0076,1.0076,0,0,0-.7432,0l-4.3877,1.7554-.5337-.5337a1,1,0,0,0-1.414,1.414l1,1a1.0009,1.0009,0,0,0,1.0786.2217L32,43.0771Z" />
                </g>
            </svg>
            <h3>No existen recetas</h3>
            <h4>
               crea tu receta con el  <span> BOTON DE CREAR RECETA </span> 
            </h4>
        </div>
    );
};
