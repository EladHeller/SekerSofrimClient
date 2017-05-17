import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {} from './root.css';
import configureStore from '../store/configureStore';
import Navbar from '../navbar/navbar.container'
const store = configureStore();
const Index =<Provider store={store}>
        <Navbar></Navbar>
</Provider>;
render(Index, document.getElementById('root'));