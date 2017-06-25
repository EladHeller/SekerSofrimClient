import React from 'react';
import Welcome from './welcome/welcome.component'
const RoutesNavigator = ({station}) => {
    let route;
    switch (station){
        case 'Welcome':
            route = <Welcome></Welcome>;
            break;
        case 'ID':
            break;
        case 'PASSWORD':
            break;
        case 'USER_DETAILS':
            break;
        case 'USER_AREA':
            break;
        case 'ADMIN_AREA':
            break;
        default:
            break;
    }
    return route;
}

export default RouteNavigator;