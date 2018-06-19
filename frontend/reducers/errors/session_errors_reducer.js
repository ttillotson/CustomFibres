import merge from 'lodash/merge';
import { RECEIVE_SESSION_ERRORS, 
         RECEIVE_CURRENT_USER } from '../../actions/session_actions';

// const defaultState = { sessionErrors: [] };

const SessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER: 
            return [];
        default:
            return state;
    }
};

export default SessionErrorsReducer;