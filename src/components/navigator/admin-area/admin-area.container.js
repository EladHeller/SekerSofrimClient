import React, { Component } from 'react';
import AdminAreaComponent from './admin-area.component';
import { connect } from 'react-redux';
import config from '../../../common/config';
import {fetchUploadMessages} from './admin-area.actions';
import './admin-area.scss';

class AdminAreaContainer extends Component {
    render(){
        return <AdminAreaComponent changeDetailsRequests={[]}>
        </AdminAreaComponent>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminAreaContainer);