import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import {} from './root.css';
import configureStore from '../store/configureStore';
import Navbar from '../navbar/navbar.container';
import MsgBar from '../message-bar/msgbar.container';
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
        ]
};

const store = configureStore(initialStore);
const Index =<Provider store={store}>
        <div>
                <Navbar></Navbar>
                <MsgBar></MsgBar>
        </div>
</Provider>;
render(Index, document.getElementById('root'));