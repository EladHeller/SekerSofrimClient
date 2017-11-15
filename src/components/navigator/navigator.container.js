import React, { Component } from 'react';
import Navigator from './navigator.component';
import { connect } from 'react-redux';
import './navigator.scss';

class NavigatorContainer extends Component {
    render(){
        return <Navigator station={this.props.station}>
            </Navigator>;
    }
}

const mapStateToProps = (state) => {
    return {
        station: state.station
    };
};

export default connect(mapStateToProps)(NavigatorContainer);
