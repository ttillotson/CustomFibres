import { combineReducers } from 'redux';
import fields from './field_reducer';
import pages from './page_reducer';
import loading from './loading_reducer';
import session from './session_reducer';
import errors from './errors/errors_reducer';

export default combineReducers({
    pages,
    fields,
    loading,
    session,
    errors,
});