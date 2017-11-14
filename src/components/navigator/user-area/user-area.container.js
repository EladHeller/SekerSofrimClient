import React, { Component } from 'react';
import UserAreaComponent from './user-area.component';
import { connect } from 'react-redux';
import config from '../../../common/config';
import {} from './user-area.actions';
import './user-area.css';

class UserAreaContainer extends Component {
    render(){
        return <UserAreaComponent user={this.props.user} year={config.year}>
        </UserAreaComponent>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeDetails:()=>dispatch(resetPassword(config.rest.serverUrl + config.rest.resetPassword))
    };
};

const mapStateToProps = (state) => {
    return {
        user:state.user
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAreaContainer);