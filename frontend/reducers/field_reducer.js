import merge from 'lodash/merge';
import { RECEIVE_ALL_FIELDS,
         RECEIVE_FIELD,
         REMOVE_FIELD
        } from '../actions/field_actions';
import { RECEIVE_PAGE, 
         RECEIVE_PAGES } from '../actions/page_actions';

const FieldReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_FIELDS:
            return merge(newState, action.fields);
        case RECEIVE_FIELD:
            // Merge will combine the objects
            merge(newState, {[action.field.id]: action.field});

            // Merge, however, will not update the arrays nested within
            newState[action.field.id].images = action.field.images;
            return newState;
        case REMOVE_FIELD:
            delete newState[action.field.id];
            return newState;
        case RECEIVE_PAGE:
            return merge(newState, action.payload.fields);
        case RECEIVE_PAGES:
            return merge(newState, action.payload.fields);
        default: 
            return state;
    }
};

export default FieldReducer;