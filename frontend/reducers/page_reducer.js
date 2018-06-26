import merge from 'lodash/merge';
import { RECEIVE_PAGES, RECEIVE_PAGE } from '../actions/page_actions';
import { RECEIVE_FIELD, REMOVE_FIELD } from '../actions/field_actions';

const PagesReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_PAGES: 
            return merge(newState, action.payload.page);
        case RECEIVE_PAGE: 
            return merge(newState, action.payload.page);
        case RECEIVE_FIELD: 
            newState[action.field.page_name].fieldIds.push(action.field.id);
            return newState;
        case REMOVE_FIELD: 
            let ids = newState[action.field.page_name].fieldIds;
            let newIds = ids.filter(id => id !== action.field.id);
            newState[action.field.page_name].fieldIds = newIds;
            return newState;
        default: 
            return state;
    }
};

export default PagesReducer;