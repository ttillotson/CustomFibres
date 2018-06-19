import merge from 'lodashmerge';
import { RECEIVE_PAGES, RECEIVE_PAGE_ERRORS } from '../../actions/page_actions';

const PagesErrorReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PAGES:
            return [];
        case RECEIVE_PAGE_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default PagesErrorReducer;