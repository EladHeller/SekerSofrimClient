import React, { Component } from 'react';
import UserDetailsComponent from './user-details.component';
import { connect } from 'react-redux';
import { requestUpdateUserDetails } from '../../../store/actions/user.actions';

class UserDetailsContainer extends Component {
    render(){
        return <UserDetailsComponent 
            sendUserDetails={this.props.sendUserDetails} 
            tryAgain={this.props.tryAgain}>
        </UserDetailsComponent>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendUserDetails:userDetails=>dispatch(requestUpdateUserDetails(userDetails)),
        tryAgain:()=>dispatch(goTo('id-login')),
    };
};

const mapStateToProps = () => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsContainer);