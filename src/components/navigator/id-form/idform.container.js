import React, { Component } from 'react';
import IdForm from './idform.component';
import { connect } from 'react-redux';
import config from '../../../common/config';
import {fetchIdLogin,idTextChanged} from '../../../store/actions/id-login.actions';

class IdFormContainer extends Component {
    render(){
        return <IdForm textChanged={this.props.textChanged} submit={this.props.submit} isCanSubmit={this.props.isCanSubmit}>
        </IdForm>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit:id=>dispatch(fetchIdLogin(padID(id))),
        textChanged:id=>dispatch(idTextChanged(padID(id)))
    };
};

const padID=(ID)=>{
    while (ID.length < 9) {
        ID = '0' + ID;
    }
    return ID;
}

const mapStateToProps = (state) => {
    return {
        isCanSubmit:state.idLogin.isCanSubmit
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IdFormContainer);