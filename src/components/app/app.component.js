import React from 'react';
import { Provider } from 'react-redux';
import Navbar from '../navbar/navbar.container';
import MsgBar from '../message-bar/msgbar.container';
import PageBody from '../page-body/pagebody.container';
import './app.scss';

export default ({store})=>(
<Provider store={store}>
    <div>
        <Navbar></Navbar>
        <PageBody></PageBody>
        <MsgBar></MsgBar>
    </div>
</Provider>
);