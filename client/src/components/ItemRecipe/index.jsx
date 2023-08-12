import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ItemRecipe.module.css';
import { useSelector } from 'react-redux';


export const ItemRecipe = ({ id, image, title, servings, diets }) => {//me traigo toda la info desde reicipeContainer(,healthScore,cuisines)
    const dietsStrings = diets?.map((element) => element + ',');
    //const cuisinesString = cuisines?.map((el)=> el +',' )

    return (
        <div className={styles.itemContainer} key={id}>     
        
            <Link to={`/recipes/${id}`}>
                <div className={styles.imgInfo}>
                    <div>
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z"
                                fill="#ffffff"
                            />
                        </svg> */}
                        <p>Mas</p>
                    </div>
                    <img
                        className={styles.img}
                        loading="lazy"
                        src={image}
                        alt={title}
                    />
                </div>
            </Link>
            {
              
            }
            <div className={styles.textContainer}>
                <div className={styles.title}>
                    <p>{title}</p>
                </div>
                <div className={styles.servingContainer}>
                    <p>Porciones</p>
                   {/* se agrega un svg por cada porcion */}
                    <div>
                        {Array.from({ length: servings }).map((a, i) => (
                            //por cada porcion una estrellaa
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="1280.000000pt" height="1181.000000pt" viewBox="0 0 1280.000000 1181.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <metadata>
                                Created by potrace 1.15, written by Peter Selinger 2001-2017
                                </metadata>
                                <g transform="translate(0.000000,1181.000000) scale(0.100000,-0.100000)"
                                fill="#ffffff" stroke="none">
                                <path d="M6327 11292 c-60 -180 -161 -489 -227 -687 -65 -198 -233 -709 -373
                                -1135 -141 -426 -367 -1114 -503 -1527 l-248 -753 -2358 0 c-1297 0 -2358 -3
                                -2358 -7 0 -5 170 -130 378 -279 207 -149 1057 -758 1887 -1353 831 -596 1518
                                -1091 1528 -1100 20 -19 55 94 -420 -1346 -187 -570 -344 -1047 -628 -1910
                                -141 -429 -286 -869 -322 -978 -36 -109 -63 -201 -60 -204 7 -6 -236 -180
                                1912 1362 1012 726 1855 1331 1872 1343 l33 23 762 -548 c2447 -1758 3053
                                -2191 3056 -2188 2 2 -46 153 -106 337 -61 183 -216 655 -346 1048 -511 1556
                                -712 2168 -811 2470 -145 440 -185 563 -185 575 0 6 855 623 1900 1373 1045
                                750 1900 1368 1900 1373 0 5 -909 10 -2357 11 l-2356 3 -164 500 c-90 275
                                -272 826 -403 1225 -131 399 -383 1166 -560 1705 -177 539 -325 983 -329 987
                                -4 5 -55 -139 -114 -320z"/>
                                </g>
                            </svg>
                        ))}
                    </div>
                </div>
                <div className={styles.dietsContainer}>
                    <p>Dietas</p>
                    {/* <div>
                        {dietsStrings.slice(0, 2).map((dieta, i) => (
                            <span key={i * 2}>{dieta}</span>
                        ))}
                    </div> */}
                    <div>
                        {
                        <span >{dietsStrings}</span>
                        }
                    </div>                 

                </div>
                {/* <div className={styles.servingContainer}>
                    <p>Punt.. salud</p> 
                   <span>{healthScore}</span> 
                </div> */}
                
                
                  {/* <div className={styles.servingContainer}>
                    <p>Cocina</p> 
                   <span>{cuisinesString}</span> 
                </div> */}
                 
                  {/* <div className={styles.servingContainer}>
                    <p>Id</p> 
                   <span>{id}</span> 
                </div> */}
            </div>
        </div>
    );
};
