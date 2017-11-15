import React, { Component } from 'react';
import MessagesBar from './msgbar.component';
import { connect } from 'react-redux';
import config from '../../common/config';
import {messagesFetchData} from './msgbar.actions';
import './msgbar.scss';


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
        fetchData: (url) => dispatch(messagesFetchData(url))
    };
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageBarContainer);