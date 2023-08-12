//applyMiddleware nos sirve para hcaer nuestras peticiones
//compose nos sirve para hacer la conexion con la extensión del navegador
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';


//esta linea es para conectar co la extensión del navegadir de reducDevTools
const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))//para poder hacer peticiones a un server, permite peticiones asynk
);

export default store;
