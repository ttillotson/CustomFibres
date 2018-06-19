import merge from 'lodash/merge';
import { START_LOADING_ALL_FIELDS,
         RECEIVE_ALL_FIELDS } from '../actions/field_actions';
import { START_LOADING_PAGES,
         RECEIVE_PAGES } from '../actions/page_actions';

const initialState = {
    fieldsLoading: false,
    pagesLoading: false,
};

const LoadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case START_LOADING_ALL_FIELDS:
            return merge(newState, {fieldsLoading: true});
        case RECEIVE_ALL_FIELDS: 
            return merge(newState, {fieldsLoading: false});
        case START_LOADING_PAGES: 
            return merge(newState, {pagesLoading: true});
        case RECEIVE_PAGES:
            return merge(newState, {pagesLoading: false});
        default: 
            return state;
    }
};

export default LoadingReducer;
