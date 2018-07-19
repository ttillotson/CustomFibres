import React from 'react';
import { connect } from 'react-redux';
import Template from '../template';
import { fetchPage } from '../../../actions/page_actions';
import { selectPageFields } from '../../../reducers/selectors';

const emailEl = <li><a href={`mailto:customfibres4@gmail.com`} className={`button quote_request`}><button>Email A Request</button></a></li>;
const phoneEl = <li><a href="tel:+17607808083"><img className='phone' src='https://res.cloudinary.com/tiptoptomes/image/upload/v1531088004/logo_2_1.png' alt="Phone Number" /></a></li>;

const mapStateToProps = (state) => {
    const page = state.pages['Quote'];
    const pageTitle = "";
    const extraEl = <ul className="request_options">{phoneEl} {emailEl}</ul>;

    return ({
        fields: selectPageFields(state, page),
        loading: state.loading.pageLoading,
        errors: state.errors.pageLoading,
        page: page,
        pageName: "Quote",
        pageTitle: pageTitle,
        endingExtras: [extraEl]
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPage: (pageName) => dispatch(fetchPage(pageName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);