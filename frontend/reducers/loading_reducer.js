import merge from 'lodash/merge';
import { START_LOADING_ALL_FIELDS,
         RECEIVE_ALL_FIELDS } from '../actions/field_actions';
import { START_LOADING_PAGES,
         START_LOADING_PAGE,
         RECEIVE_PAGES,
         RECEIVE_PAGE } from '../actions/page_actions';

const initialState = {
    fieldsLoading: false,
    pageLoading: false,
};

const LoadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case START_LOADING_ALL_FIELDS:
            return merge(newState, {fieldsLoading: true});
        case START_LOADING_PAGES: 
            return merge(newState, {pageLoading: true});
        case START_LOADING_PAGE: 
            return merge(newState, {pageLoading: true});
        case RECEIVE_ALL_FIELDS: 
            return merge(newState, {fieldsLoading: false});
        case RECEIVE_PAGES:
            return merge(newState, {pageLoading: false});
        case RECEIVE_PAGE:
            return merge(newState, {pageLoading: false});
        default: 
            return state;
    }
};

export default LoadingReducer;
