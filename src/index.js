import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/style/bootstrap-rtl.css';
import './assets/style/fonts.css';
import $ from 'jquery';
import "bootstrap";
import "babel-polyfill";
import 'whatwg-fetch';
import React from "react";
import { render } from 'react-dom';
import { fetchConnectedUser } from './store/actions/user.actions';
import configureStore from './store/configure-store';
import initialStore from './store/initial-store';
import App from './components/app/app.component';

const store = configureStore(initialStore);
render(<App store={store}></App>, document.getElementById('root'));
store.dispatch(fetchConnectedUser());