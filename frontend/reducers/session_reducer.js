import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultState = { admin: null};

const SessionReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            return merge(newState, { currentUser: action.user});
        default:
            return state;
    }
};

export default SessionReducer;