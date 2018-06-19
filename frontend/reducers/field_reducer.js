import merge from 'lodash/merge';
import { RECEIVE_ALL_FIELDS,
         RECEIVE_FIELD,
         START_LOADING_ALL_FIELDS,
         RECEIVE_FIELD_ERRORS
        } from '../actions/field_actions';

const FieldReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_FIELDS:
            return merge(newState, action.fields);
        case RECEIVE_FIELD:
            return merge(newState, {[action.field.id]: action.field});
        default: 
            return state;
    }
};

export default FieldReducer;