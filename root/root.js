import React from 'react';
import config from '../common/config';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {screenResize, fetchConnectedUser} from './root.actions';
import configureStore from '../store/configureStore';
import Navbar from '../navbar/navbar.container';
import MsgBar from '../message-bar/msgbar.container';
import PageBody from '../page-body/pagebody.container';
import initialStore from './initialStore'
import './root.css';
import "babel-polyfill";

const store = configureStore(initialStore);
const Index = <Provider store={store}>
    <div>
        <Navbar></Navbar>
        <PageBody></PageBody>
        <MsgBar></MsgBar>
    </div>
</Provider>;
render(Index, document.getElementById('root'));
setTimeout(()=>{
    store.dispatch(fetchConnectedUser(config.rest.serverUrl + config.rest.getConnectedUser));
});
window.addEventListener('resize', () => {
    setTimeout(()=>{
        store.dispatch(screenResize(window.outerHeight, window.outerWidth));
    });
});