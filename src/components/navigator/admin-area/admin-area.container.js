import React, { Component } from 'react';
import AdminAreaComponent from './admin-area.component';
import { connect } from 'react-redux';
import config from '../../../common/config';
import {uploadMessagesFile, downloadUsersExcel } from '../../../store/actions/admin.actions';
import './admin-area.scss';

class AdminAreaContainer extends Component {
    render(){
        return <AdminAreaComponent 
            uploadUsersFile={this.props.uploadUsersFile} 
            uploadMessagesFile={this.props.uploadMessagesFile}
            downloadUsersExcel={this.props.downloadUsersExcel}
            changeDetailsRequests={[]}>
        </AdminAreaComponent>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadUsersFile:file=>dispatch(),
        uploadMessagesFile:file=>dispatch(uploadMessagesFile(file)),
        downloadUsersExcel:()=>dispatch(downloadUsersExcel())
    };
};

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminAreaContainer);