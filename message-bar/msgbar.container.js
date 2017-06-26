import React, { Component } from 'react';
import MessagesBar from './msgbar.component';
import { connect } from 'react-redux';
import config from '../common/config';
//import {userLoggingOut} from './navbar.actions';
import './msgbar.css';


class MessageBarContainer extends Component {
    render(){
        return <MessagesBar messages={this.props.messages}>
        </MessagesBar>;
    }
    componentDidMount(){
        this.props.fetchData(config.rest.serverUrl + config.rest.getMessages);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => console.log//dispatch(itemsFetchData(url))
    };
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageBarContainer);