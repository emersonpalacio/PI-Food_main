import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { createRecipe } from '../../redux/actions';
import styles from './FormCreate.module.css';
//Estado inicial del formulario
const formData = {
    title: '',
    summary: '',
    image: '',
    readyInMinutes: '',
    servings: '',
    pricePerServing: '',
    healthScore: '',
    cuisines: [],
    diets: [],
};
const stepsData = [];
//Validaciones por cada campo del formulario
const formValidations = {
    title: [
        (value) => value.length >= 2,
        'El nombre debe teer mas 2 caracteres',
    ],
    summary: [
        (value) => value.length >= 10,
        'El resumen debe tener más de 10 caracteres',
    ],
    image: [(value) => value.includes('https://'), 'La imagen de URL no es válida'],
    readyInMinutes: [(value) => value.length >= 1, 'Obligatorio'],
    servings: [(value) => value.length >= 1, 'Obligatorio'],
    pricePerServing: [(value) => value.length >= 1, 'Obligatorio'],
    healthScore: [
        (value) => value >= 1 && value <= 100,
        'Introduzca un número entre 1 y 100',
    ],
    cuisines: [(value) => value.length >= 1, 'Obligatorio'],
    diets: [(value) => value.length >= 1, 'Obligatorio'],
};




export const FormCreate = () => {
    const [nSteps, setNSteps] = useState(2);
    const [submited, setSubmited] = useState(false);
    const dispatch = useDispatch();
    const cuisines = useSelector((state) => state?.cuisines);
    const diets = useSelector((state) => state?.diets);
    // Uso el customhooks useForm el cual me regresa el value para cada input,
    // la funcion onInputchange y por cada input si su valor es valido o no
    const {
        title,
        summary,
        image,
        readyInMinutes,
        servings,
        pricePerServing,
        healthScore,
        formState,
        diets: dietsState,
        isformValid,
        onInputChange,
        onSelectChange,
        onSelectDelete,
        pricePerServingValid,
        readyInMinutesValid,
        servingsValid,
        healthScoreValid,
        titleValid,
        imageValid,
        summaryValid,
        dietsValid,
    } = useForm(formData, formValidations);

    const { formState: formStepsState, onInputChange: onStepChange } =
        useForm(stepsData);
    const onClose = () => {
        dispatch({ type: 'TOGGLE_CREATE' });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        setSubmited(true);
        if (!isformValid) return;
        dispatch(createRecipe(formState, formStepsState));
        dispatch({ type: 'TOGGLE_CREATE' });
    };
    const addStep = () => {
        setNSteps(nSteps + 1);
    };
    return (
        <div className={styles.container}>
            <form onSubmit={onSubmit} className={styles.form}>
                <button
                    type="button"
                    className={`${styles.button} ${styles.buttonClone}`}
                    onClick={onClose}
                >
                    x
                </button>
                {/* column recipe info */}
                <div className={styles.Container}>
                    <label className={styles.label}>Nombre</label>
                    <input
                        className={
                            !!titleValid && submited
                                ? styles.inputError
                                : styles.input
                        }
                        name="title"
                        value={title}
                        onChange={onInputChange}
                        type="text"
                        placeholder="Nombre"
                    />
                    {!!titleValid && submited && (
                        <p className={styles.errorText}>{titleValid}</p>
                    )}
                    <label className={styles.label}>Resumen</label>
                  
                    <textarea
                        className={
                            !!titleValid && submited
                                ? styles.textareaError
                                : styles.textarea
                        }
                        name="summary"
                        value={summary}
                        onChange={onInputChange}
                        type="text"
                        placeholder="Descripción de mas 10 caracteres"
                    />
                    {!!summaryValid && submited && (
                        <p className={styles.errorText}>{summaryValid}</p>
                    )}
                    <label className={styles.label}>Servicio</label>
                    <input
                        className={
                            !!servingsValid && submited
                                ? styles.inputError
                                : styles.input
                        }
                        name="servings"
                        value={servings}
                        onChange={onInputChange}
                        type="number"
                        placeholder="8"
                    />
                    {!!servingsValid && submited && (
                        <p className={styles.errorText}>{servingsValid}</p>
                    )}
                    <label className={styles.label}>Precio por ración</label>
                    <input
                        className={
                            !!pricePerServingValid && submited
                                ? styles.inputError
                                : styles.input
                        }
                        name="pricePerServing"
                        value={pricePerServing}
                        onChange={onInputChange}
                        type="number"
                        placeholder="$"
                    />
                    {!!pricePerServingValid && submited && (
                        <p className={styles.errorText}>
                            {pricePerServingValid}
                        </p>
                    )}
                    <label className={styles.label}>Tiempo de preparación</label>
                    <input
                        className={
                            !!readyInMinutesValid && submited
                                ? styles.inputError
                                : styles.input
                        }
                        name="readyInMinutes"
                        value={readyInMinutes}
                        onChange={onInputChange}
                        type="number"
                        placeholder="Formato en Minutos"
                    />
                    {!!readyInMinutesValid && submited && (
                        <p className={styles.errorText}>
                            {readyInMinutesValid}
                        </p>
                    )}
                    <label className={styles.label}>Puntaje salud</label>
                    <input
                        className={
                            !!healthScoreValid && submited
                                ? styles.inputError
                                : styles.input
                        }
                        name="healthScore"
                        value={healthScore}
                        onChange={onInputChange}
                        type="number"
                        placeholder="1 al 100"
                    />
                    {!!healthScoreValid && submited && (
                        <p className={styles.errorText}>{healthScoreValid}</p>
                    )}
                </div>
                {/* Column steps */}
                <div className={`${styles.Container} ${styles.stepsContainer}`}>
                    <span>Ingredientes separados por comas</span>
                    {Array.from({ length: nSteps }).map((s, i) => (
                        <div className={styles.step} key={i}>
                            <label className={styles.label}>Paso {i + 1}</label>
                            <input
                                className={styles.input}
                                name={`step${i + 1}-step`}
                                type="text"
                                onChange={onStepChange}
                                placeholder="Descripción"
                            />
                            <input
                                className={styles.input}
                                name={`step${i + 1}-ingredients`}
                                type="text"
                                onChange={onStepChange}
                                placeholder="Ingredientes"
                            />
                        </div>
                    ))}

                    <button
                        className={`${styles.button} ${styles.buttonAdd}`}
                        onClick={addStep}
                        type="button"
                    >
                        Agregar paso
                    </button>
                </div>
                {/* Column image and create recipe */}
                <div className={styles.Container}>
                    <label className={styles.label}>Imagen Url</label>
                    <input
                        className={
                            !!imageValid && submited
                                ? styles.inputError
                                : styles.input
                        }
                        name="image"
                        value={image}
                        onChange={onInputChange}
                        type="text"
                        placeholder="https://....."
                    />
                    {!!imageValid && submited && (
                        <p className={styles.errorText}>{imageValid}</p>
                    )}
                    <img src={image} alt="" />
                    <div className={styles.selectContainer}>
                        <label className={styles.label} htmlFor="cuisines">
                            Origen
                        </label>
                        <select
                            className={styles.select}
                            onChange={onSelectChange}
                            id="cuisines"
                            name="cuisines"
                        >
                            <option value="Origin">Seleccionar</option>
                            {cuisines &&
                                cuisines.map((cuisine, i) => (
                                    <option key={i} value={cuisine.name}>
                                        {cuisine.name}
                                    </option>
                                ))}
                        </select>
                        {!!dietsValid && submited && (
                            <p className={styles.errorText}>{dietsValid}</p>
                        )}
                    </div>
                    <div className={styles.selectContainer}>
                        <label className={styles.label} htmlFor="Diets">
                            Tipo dieta
                        </label>
                        <select
                            className={styles.select}
                            onChange={onSelectChange}
                            id="diets"
                            name="diets"
                        >
                            <option value="All">Seleccionar</option>
                            {diets &&
                                diets.map(({ name, id }, i) => {
                                    return (
                                        <option key={i} value={id}>
                                            {name}
                                        </option>
                                    );
                                })}
                        </select>
                        <ul className={styles.selectedDietContainer}>
                            {dietsState.length >= 1 &&
                                dietsState.map((diet) => {
                                    const { name } = diets.find((element) => {
                                        return Number(diet) === element.id;
                                    });
                                    return (
                                        <li key={diet}>
                                            <p>{name}</p>
                                            <button
                                                name="diets"
                                                type="button"
                                                onClick={onSelectDelete}
                                                value={diet}
                                                className={styles.deleteDiet}
                                            >
                                                X
                                            </button>
                                        </li>
                                    );
                                })}
                        </ul>
                        {!!dietsValid && submited && (
                            <p className={styles.errorText}>{dietsValid}</p>
                        )}
                    </div>
                    <button className={styles.button} type="submit">
                        Crear Receta
                    </button>
                </div>
            </form>
        </div>
    );
};
