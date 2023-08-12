import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';
import { searchRecipe } from '../../redux/actions';


import styles from './SearchBar.module.css';

const formData = {
    search: '',
};

export const SearchBar = () => {
    const dispatch = useDispatch();
    const { search, onInputChange } = useForm(formData);
    const [name, setName] = useState("");

    const handleInpuutChange = (e) => {
        setName(e.target.value);       
      };

    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(searchRecipe(name.toLowerCase()));  
       e.target.reset() //borra info anterior
    };

  
    

    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch(searchRecipe(search.toLowerCase()));
    // };
    return (
        <>
    
       <div>
       <form onSubmit={handleSubmit} className={styles.form} >
            <input
                className={styles.inputSearch}
                name="search"               
                type="text"
                onChange={(e) => handleInpuutChange(e)}
                placeholder="Buscar recetas"
            />
      <button type="submit"className={styles.button} ></button>
 
      
    </form>

        {/* <form onSubmit={handleSubmit} className={styles.form}>
            <input
                className={styles.inputSearch}
                placeholder="Buscar recetas"
                type="text"
                name="search"
                value={search}
                onChange={(e)=>handleInpuutChange(e)}
            />
            <button className={styles.button} type="submit">
            </button>
        </form> */}
        </div>
        </>
    );
};
