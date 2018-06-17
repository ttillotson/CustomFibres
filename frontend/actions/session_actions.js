import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signIn = (user) => (dispatch) => (
    SessionApiUtil.signIn(user).then(ajaxUser => 
        (dispatch(receiveCurrentUser(ajaxUser))
    ), errors => (
        dispatch(receiveSessionErrors(errors.responseJSON))
    ))
);

export const signOut = () => (dispatch) => (
    SessionApiUtil.signOut().then(() => 
        (dispatch(receiveCurrentUser())
    ), errors => (
        dispatch(receiveSessionErrors(errors.responseJSON))
    ))
);