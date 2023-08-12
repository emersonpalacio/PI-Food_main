import React from 'react';
import { useFilters } from '../../hooks';

import styles from './Filters.module.css';

export const Filters = ({ resetPage }) => {
    const {
        cuisines,
        diets,
        handleSort,
        handleSortByCuisine,
        handleSortByDiet,
        handleSortByScore,
        handleDeleteFilters,
        handleSortByCreated,
    } = useFilters(resetPage);
    return (
        <section className={styles.filtersContainer}>
            <div className={styles.filterContainer}>
                <label className={styles.label} htmlFor="sort">
                    Clasificar
                </label>
                <select
                    className={styles.select}
                    id="sort"
                    name="Sort"
                    onChange={handleSort}
                >
                    <option value="sort">[A-Z]</option>
                    <option value="asc">Name (A-Z)</option>
                    <option value="desc">Name (Z-A)</option>
                </select>
            </div>
            <div className={styles.filterContainer}>
                <label className={styles.label} htmlFor="origin">
                    Desde
                </label>
                <select
                    className={styles.select}
                    id="created"
                    name="created"
                    onChange={handleSortByCreated}
                >
                    <option value="All">Todos</option>
                    <option value="api">Api</option>
                    <option value="db">Db</option>
                </select>
            </div>
            <div className={styles.filterContainer}>
                <label className={styles.label} htmlFor="origin">
                    Origen
                </label>
                <select
                    className={styles.select}
                    id="origin"
                    name="origin"
                    onChange={handleSortByCuisine}
                >
                    <option value="All">Todos</option>
                    {cuisines &&
                        cuisines.map((cuisine, i) => (
                            <option key={i} value={cuisine.name}>
                                {cuisine.name}
                            </option>
                        ))}
                </select>
            </div>
            <div className={styles.filterContainer}>
                <label className={styles.label} htmlFor="Diets">
                Tipo  de dieta 
                </label>
                <select
                    className={styles.select}
                    id="diets"
                    name="diets"
                    onChange={handleSortByDiet}
                >
                    <option value="All">Todos</option>
                    {diets &&
                        diets.map((diet, i) => (
                            <option key={i} value={diet.name}>
                                {diet.name}
                            </option>
                        ))}
                </select>
            </div>

            <div className={styles.filterContainer}>
                <label className={styles.label} htmlFor="Diets">
                Puntuación salud
                </label>
                <select
                    className={styles.select}
                    id="healthScore"
                    name="healthScore"
                    onChange={handleSortByScore}
                >
                    <option value="All">Todos</option>
                    <option value="asc">Más alta </option>
                    <option value="desc">Más baja</option>
                </select>
            </div>

            <button onClick={handleDeleteFilters} className={styles.button}>
                <span>Borrar filtros</span>
            </button>
        </section>
    );
};
