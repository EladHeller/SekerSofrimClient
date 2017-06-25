import React from 'react';
import Navigator from '../navigator/navigator.container';

const PageBody = ({windowHeight, windowWidth}) => {
    const styleObject = {
    };
    return <div style={styleObject} className="page-body">
        <Navigator></Navigator>
    </div>
}

module.exports = PageBody;