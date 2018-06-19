import { combineReducers } from 'redux';
import field from './field_reducer';
import page from './page_reducer';
import loading from './loading_reducer';
import session from './session_reducer';
import errors from './errors/errors_reducer';

export default combineReducers({
    page,
    field,
    loading,
    session,
    errors,
});