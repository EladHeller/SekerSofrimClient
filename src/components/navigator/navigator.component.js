import React from 'react';
import Welcome from './welcome/welcome.component';
import ID from './id-form/idform.container';
import Password from './password-form/passwordform.container';
import UserArea from './user-area/user-area.container';
import AdminArea from './admin-area/admin-area.container';
import stations from '../../common/stations';

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
            route = <UserArea></UserArea>
            break;
        case stations.AdminArea:
            route = <AdminArea></AdminArea>
            break;
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