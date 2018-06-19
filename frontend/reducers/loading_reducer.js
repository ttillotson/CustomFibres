import merge from 'lodash/merge';
import { START_LOADING_ALL_FIELDS,
         RECEIVE_ALL_FIELDS } from '../actions/field_actions';

const initialState = {
    fieldsLoading: false
};

const LoadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case START_LOADING_ALL_FIELDS:
            return merge(newState, {fieldsLoading: true});
        case RECEIVE_ALL_FIELDS: 
            return merge(newState, {fieldsLoading: false});
        default: 
            return state;
    }
};

export default LoadingReducer;
