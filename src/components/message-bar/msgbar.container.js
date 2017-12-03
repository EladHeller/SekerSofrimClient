import React, { Component } from 'react';
import MessagesBar from './msgbar.component';
import { connect } from 'react-redux';
import config from '../../common/config';
import { messagesFetchData } from '../../store/actions/messages.actions';
import { toggleMessagesModal } from '../../store/actions/ui.actions';
import './msgbar.scss';


class MessageBarContainer extends Component {
    render(){
        return <MessagesBar 
        toggleModal={this.props.toggleModal} 
        modalOpen={this.props.modalOpen}
        messages={this.props.messages}>
        </MessagesBar>;
    }
    componentDidMount(){
        this.props.fetchData();
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(messagesFetchData()),
        toggleModal:()=>dispatch(toggleMessagesModal())
    };
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        modalOpen: state.ui.messagesModalOpen
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageBarContainer);