import React, { Component } from 'react';
import IdForm from './idform.component';
import { connect } from 'react-redux';
import config from '../common/config';
//import {messagesFetchData} from './msgbar.actions';
import './idform.css';


class IfFormContainer extends Component {
    render(){
        return <IdForm submit={this.props.submit}>
        </IdForm>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit:()=>console.log()
    };
};

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IfFormContainer);