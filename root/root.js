import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {screenResize} from './root.actions';
import configureStore from '../store/configureStore';
import Navbar from '../navbar/navbar.container';
import MsgBar from '../message-bar/msgbar.container';
import PageBody from '../page-body/pagebody.container';
import './root.css';
import "babel-polyfill";

const initialStore = {
    user : {
        isLoggedIn : true,
        userId: '301617692',
        firstName: 'משה',
        lastName: 'כהן'
    },
    messages : [
        'בדיקה בדיקה בדיקה',
        'הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה',
        'בדיקה אחרת סתם',
    ], 
    ui :{
        windowHeight: window.outerHeight,
        windowWidth: window.outerWidth
    }
};

const store = configureStore(initialStore);
const Index =<Provider store={store}>
    <div>
        <Navbar></Navbar>
        <PageBody></PageBody>
        <MsgBar></MsgBar>
    </div>
</Provider>;
render(Index, document.getElementById('root'));

window.addEventListener('resize', () => {
    setTimeout(()=>{
        store.dispatch(screenResize(window.outerHeight, window.outerWidth));
    });
});