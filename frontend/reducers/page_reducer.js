import merge from 'lodashmerge';
import { RECEIVE_PAGES } from '../actions/page_actions';

const PagesReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_PAGES: 
            return merge(newState, action.pages);
        default: 
            return state;
    }
};

export default PagesReducer;