
import merge from 'lodash/merge';

const defaultState = { admin: null};

const SessionReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        default:
            return state;
    }
};

export default SessionReducer;