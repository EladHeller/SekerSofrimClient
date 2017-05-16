import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import {} from './root.style';
import {} from './root.css';
// import configureStore from './store/configureStore';
import Navbar from '../navbar/navbar.container'
//const store = configureStore();
const Index =
    <div>
        <Navbar></Navbar>
    </div>;
{/*<Provider store={store}>*/}
        {/*<ItemList></ItemList>*/}
// </Provider>;
render(Index, document.getElementById('root'));