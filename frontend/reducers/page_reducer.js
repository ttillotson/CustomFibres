import merge from 'lodash/merge';
import { RECEIVE_PAGES, RECEIVE_PAGE } from '../actions/page_actions';

const PagesReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_PAGES: 
            return merge(newState, action.pages);
        case RECEIVE_PAGE: 
            return merge(newState, action.payload.page);
        default: 
            return state;
    }
};

export default PagesReducer;