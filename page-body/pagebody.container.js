import React, { Component } from 'react';
import PageBody from './pagebody.component';
import { connect } from 'react-redux';
import './pagebody.css';


class PageBodyContainer extends Component {
    render(){
        return <PageBody windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth}>
        </PageBody>;
    }
}

const mapStateToProps = (state) => {
    return {
        windowHeight : state.ui.windowHeight,
        windowWidth : state.ui.windowWidth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageBodyContainer);