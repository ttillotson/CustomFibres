import React from 'react';
import { connect } from 'react-redux';
import Template from '../template';
import { fetchPage } from '../../../actions/page_actions';
import { selectPageFields } from '../../../reducers/selectors';

const mapStateToProps = (state) => {
    const page = state.pages['Quote'];
    const pageTitle = "";
    const extraEl = <a href={`mailto:customfibres4@gmail.com`} className={`button quote_request`}><button>Request a Quote</button></a>;

    return ({
        fields: selectPageFields(state, page),
        loading: state.loading.pageLoading,
        errors: state.errors.pageLoading,
        pageName: "Quote",
        pageTitle: pageTitle,
        extras: extraEl
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPage: (pageName) => dispatch(fetchPage(pageName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);