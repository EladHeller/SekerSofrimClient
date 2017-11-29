import React from 'react';
import config from '../common/config';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {fetchConnectedUser} from './root.actions';
import configureStore from '../store/configureStore';
import Navbar from '../components/navbar/navbar.container';
import MsgBar from '../components/message-bar/msgbar.container';
import PageBody from '../components/page-body/pagebody.container';
import initialStore from './initialStore'
import './root.scss';
import '../assets/style/bootstrap-rtl.css';
import '../assets/style/bootstrap.min.css';
import '../assets/style/fonts.css';
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
store.dispatch(fetchConnectedUser());