import React, { Component } from 'react';
import Navbar from './navbar.component';
import { connect } from 'react-redux';
import {userLoggingOut} from './navbar.actions';
import './navbar.scss';

class NavbarContainer extends Component {
    render(){
        return <Navbar isLoggedIn={this.props.isLoggedIn} loggingOut={this.props.userLoggingOut}>
        </Navbar>;
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLoggingOut: ()=>dispatch(userLoggingOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
