import React, { Component } from 'react';
import PageBody from './pagebody.component';
import { connect } from 'react-redux';
import './pagebody.css';


class PageBodyContainer extends Component {
    render(){
        return <PageBody>
        </PageBody>;
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageBodyContainer);