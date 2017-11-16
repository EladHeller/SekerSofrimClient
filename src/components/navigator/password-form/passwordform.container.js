import React, { Component } from 'react';
import PasswordForm from './passwordform.component';
import { connect } from 'react-redux';
import config from '../../../common/config';
import {resetPassword, fetchSubmit,passwordTextChanged} from './passwordform.actions';

class PasswordFormContainer extends Component {
    render(){
        return <PasswordForm passwordSendTo={this.props.passwordSendTo} textChanged={this.props.textChanged} submit={this.props.submit} isCanSubmit={this.props.isCanSubmit} resetPassword={this.props.resetPassword}>
        </PasswordForm>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit:(password)=>{
            dispatch(fetchSubmit());
        },
        textChanged:(password)=>dispatch(passwordTextChanged(password)),
        resetPassword:()=>dispatch(resetPassword())
    };
};

const mapStateToProps = (state) => {
    return {
        isCanSubmit:state.passwordLogin.isCanSubmit,
        passwordSendTo: state.passwordLogin.passwordSendTo
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordFormContainer);