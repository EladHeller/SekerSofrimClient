import React, { Component } from 'react';
import PasswordForm from './passwordform.component';
import { connect } from 'react-redux';
import config from '../../common/config';
import {fetchSubmit,passwordTextChanged} from './passwordform.actions';

class PasswordFormContainer extends Component {
    render(){
        return <PasswordForm passwordSendTo={this.props.passwordSendTo} textChanged={this.props.textChanged} submit={this.props.submit} isCanSubmit={this.props.isCanSubmit}>
        </PasswordForm>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit:(password)=>{
            dispatch(fetchSubmit(password));
        },
        textChanged:(password)=>dispatch(passwordTextChanged(password))
    };
};

const mapStateToProps = (state) => {
    return {
        isCanSubmit:state.passwordLogin.isCanSubmit,
        passwordSendTo: state.passwordLogin.passwordSendTo
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordFormContainer);