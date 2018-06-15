import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const Auth = ({}) => (
    <Route />
);

const mapStateToDispatch = (state) => ({
    loggedIn: Boolean(state.session.admin)
});


export const AuthRoute = withRouter(connect(mapStateToDispatch, null)(Auth));