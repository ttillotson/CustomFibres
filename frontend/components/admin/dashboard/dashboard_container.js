import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { signOut, receiveErrors } from '../../../actions/session_actions';
import { fetchPages } from '../../../actions/page_actions';
import { updateField } from '../../../actions/field_actions';

const mapStateToProps = (state) => ({
    pages: state.pages,
    loading: state.loading,
    errors: state.loading,
    fields: state.fields
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut()),
    fetchPages: () => dispatch(fetchPages()),
    clearErrors: (errors) => dispatch(receiveErrors(errors)),
    updateField: (field) => dispatch(updateField(field))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);