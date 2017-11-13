import React, { Component } from 'react';
import IdForm from './idform.component';
import { connect } from 'react-redux';
import config from '../../../common/config';
import {fetchSubmit,idTextChanged} from './idform.actions';

class IdFormContainer extends Component {
    render(){
        return <IdForm textChanged={this.props.textChanged} submit={this.props.submit} isCanSubmit={this.props.isCanSubmit}>
        </IdForm>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit:(id)=>{
            while (id.length < 9) {
                id = '0' + id;
            }
            dispatch(fetchSubmit(config.rest.serverUrl + config.rest.idLogin,id));
        },
        textChanged:(id)=>dispatch(idTextChanged(id))
    };
};

const mapStateToProps = (state) => {
    return {
        isCanSubmit:state.idLogin.isCanSubmit
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IdFormContainer);