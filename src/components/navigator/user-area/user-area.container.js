import React, { Component } from 'react';
import UserAreaComponent from './user-area.component';
import { connect } from 'react-redux';
import config from '../../../common/config';
import {fetchChangeDetails, changeUserDetails} from '../../../store/actions/user.actions';
import { toggleChangeUserDetailsModal } from '../../../store/actions/ui.actions';
import './user-area.scss';

class UserAreaContainer extends Component {
    render(){
        return <UserAreaComponent modalOpen={this.props.modalOpen} toggleModal={this.props.toggleModal} user={this.props.user} year={config.year} userDetailsChanged={this.props.userDetailsChanged}>
        </UserAreaComponent>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userDetailsChanged:userDetails=>dispatch(changeUserDetails(userDetails)),
        changeDetails:()=>dispatch(fetchChangeDetails()),
        toggleModal:()=>dispatch(toggleChangeUserDetailsModal())
    };
};

const mapStateToProps = (state) => {
    return {
        user:state.user,
        modalOpen:state.ui.userDetailsModalOpen
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAreaContainer);