import React, { Component } from 'react';
import UserAreaComponent from './user-area.component';
import { connect } from 'react-redux';
import config from '../../../common/config';
import {fetchChangeDetails} from './user-area.actions';
import './user-area.scss';

class UserAreaContainer extends Component {
    render(){
        return <UserAreaComponent user={this.props.user} year={config.year} userDetailsChanged={userDetailsChanged}>
        </UserAreaComponent>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userDetailsChanged:dispatch(userDetailsChanged()),
        changeDetails:()=>dispatch(fetchChangeDetails())
    };
};

const mapStateToProps = (state) => {
    return {
        user:state.user
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAreaContainer);