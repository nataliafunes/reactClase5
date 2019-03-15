import React from 'react';
import ReactDom from 'react-dom';
import Carrito from './components/Carrito';
import { Provider } from 'react-redux'
import store from "./store";


ReactDom.render(
    <Provider store={store}>
        <Carrito/>
    </Provider>,
    document.getElementById('root')
);

