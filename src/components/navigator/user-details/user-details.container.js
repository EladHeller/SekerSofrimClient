import React, { Component } from 'react';
import UserDetailsComponent from './user-details.component';
import { connect } from 'react-redux';
import { userDetailsChanged, requestUpdateUserDetails } from '../../../store/actions/user-details.action';

class UserDetailsContainer extends Component {
    render(){
        return <UserDetailsComponent 
            userDetails={this.props.userDetails} 
            userDetailsChanged={this.props.userDetailsChanged}
            sendUserDetails={this.props.sendUserDetails} 
            tryAgain={this.props.tryAgain}>
        </UserDetailsComponent>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendUserDetails:userDetails=>dispatch(requestUpdateUserDetails(userDetails)),
        tryAgain:()=>dispatch(goTo('id-login')),
        userDetailsChanged:userDetails=>dispatch(userDetailsChanged(userDetails))
    };
};

const mapStateToProps = state => {
    return {
        userDetails:state.userDetails.userDetailsConfirm
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsContainer);