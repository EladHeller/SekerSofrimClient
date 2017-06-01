import React, { Component } from 'react';
import MessagesBar from './msgbar.component';
import { connect } from 'react-redux';
//import {userLoggingOut} from './navbar.actions';
//import {} from './navbar.css';


class MessageBarContainer extends Component {
    render(){
        return <MessagesBar messages={this.props.messages}>
        </MessagesBar>;
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps)(MessageBarContainer);