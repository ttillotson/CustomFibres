import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const Auth = ({ exact, path, loggedIn, component: Component }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/admin' />
        )
    )} />
);

const mapStateToDispatch = (state) => ({
    loggedIn: Boolean(state.session.admin)
});


export const AuthRoute = withRouter(connect(mapStateToDispatch, null)(Auth));