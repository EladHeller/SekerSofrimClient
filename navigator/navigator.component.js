import React from 'react';
import Welcome from './welcome/welcome.component';
import ID from './id-form/idform.container';
import Password from './password-form/passwordform.container';
import stations from '../common/stations';

const RoutesNavigator = ({station}) => {
    let route;
    switch (station.stationName){
        case stations.Welcome:
            route = <Welcome></Welcome>;
            break;
        case stations.ID:
            route = <ID></ID>;
            break;
        case stations.Password:
            route = <Password></Password>;
            break;
        case stations.UserArea:
        case stations.AdminArea:
        case stations.UserDetails:
        default:
            route = <Welcome></Welcome>;
            break;
    }

    return <div id="route-navigator">
        {route}
    </div>;
}

export default RoutesNavigator;