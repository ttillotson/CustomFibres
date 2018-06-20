import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import field from './field_errors_reducer';
import page from './page_errors_reducer';


export default combineReducers({
    page,
    field,
    session,
});