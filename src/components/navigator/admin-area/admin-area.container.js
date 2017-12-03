import React, { Component } from 'react';
import AdminAreaComponent from './admin-area.component';
import { connect } from 'react-redux';
import config from '../../../common/config';
import {uploadMessagesFile, downloadUsersExcel, uploadUsersFile, getChangeDetailsRequests } from '../../../store/actions/admin.actions';
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

    componentDidMount(){

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadUsersFile:file=>dispatch(uploadUsersFile(file)),
        uploadMessagesFile:file=>dispatch(uploadMessagesFile(file)),
        downloadUsersExcel:()=>dispatch(downloadUsersExcel()),
        getChangeDetailsRequests:()=>dispatch(getChangeDetailsRequests()),
    };
};

const mapStateToProps = (state) => {
    return {
        changeDetailsRequests: state.admin.changeDetailsRequests
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminAreaContainer);