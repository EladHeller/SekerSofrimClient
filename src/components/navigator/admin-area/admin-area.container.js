import React, { Component } from 'react';
import AdminAreaComponent from './admin-area.component';
import { connect } from 'react-redux';
import config from '../../../common/config';
import {uploadMessagesFile} from '../../../store/actions/admin.actions';
import './admin-area.scss';

class AdminAreaContainer extends Component {
    render(){
        return <AdminAreaComponent 
            uploadUsersFile={this.props.uploadUsersFile} 
            uploadMessagesFile={this.props.uploadMessagesFile}
            changeDetailsRequests={[]}>
        </AdminAreaComponent>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadUsersFile:file=>dispatch(),
        uploadMessagesFile:file=>dispatch(uploadMessagesFile(file)),
    };
};

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminAreaContainer);