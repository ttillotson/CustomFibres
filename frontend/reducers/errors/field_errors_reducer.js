import merge from 'lodash/merge';
import { RECEIVE_ALL_FIELDS,
         RECEIVE_FIELD,
         RECEIVE_FIELD_ERRORS
        } from '../../actions/field_actions';

const FieldErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = merge([], state);
    switch (action.type) {
        case RECEIVE_ALL_FIELDS:
            return [];
        case RECEIVE_FIELD:
            return [];
        case RECEIVE_FIELD_ERRORS:
            return action.errors;
        default: 
            return state;
    }
};

export default FieldErrorsReducer;