import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { signOut, receiveErrors } from '../../../actions/session_actions';
import { fetchPages } from '../../../actions/page_actions';

const mapStateToProps = (state) => ({
    pages: state.pages,
    fields: state.fields
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut()),
    fetchPages: () => dispatch(fetchPages()),
    clearErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);