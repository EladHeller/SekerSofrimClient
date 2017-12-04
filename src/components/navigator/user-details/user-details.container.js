import React, { Component } from 'react';
import UserDetailsComponent from './user-details.component';
import { connect } from 'react-redux';
import { userDetailsChanged, requestUpdateUserDetails } from '../../../store/actions/user-details.action';
import { navigate } from '../../../store/actions/station.actions';

class UserDetailsContainer extends Component {
    render(){
        return <UserDetailsComponent 
            userDetails={this.props.userDetails || {ID:this.props.id}} 
            userDetailsChanged={this.props.userDetailsChanged}
            sendUserDetails={this.props.sendUserDetails} 
            tryAgain={this.props.tryAgain}>
        </UserDetailsComponent>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendUserDetails:userDetails=>dispatch(requestUpdateUserDetails(userDetails)),
        tryAgain:()=>dispatch(navigate('ID')),
        userDetailsChanged:userDetails=>dispatch(userDetailsChanged(userDetails))
    };
};

const mapStateToProps = state => {
    return {
        userDetails:state.userDetails.userDetailsConfirm,
        id:state.idLogin.ID
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsContainer);