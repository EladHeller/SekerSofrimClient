import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {} from './root.css';
import configureStore from '../store/configureStore';
import Navbar from '../navbar/navbar.container';

const initialStore = {
        user : {
                isLoggedIn : true,
                userId: '301617692',
                firstName: 'משה',
                lastName: 'כהן'
        }
};

const store = configureStore(initialStore);
const Index =<Provider store={store}>
        <Navbar></Navbar>
</Provider>;
render(Index, document.getElementById('root'));