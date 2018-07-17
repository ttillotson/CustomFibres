import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { signOut, receiveErrors } from '../../../actions/session_actions';
import { fetchPages, fetchPage, updatePage } from '../../../actions/page_actions';


const mapStateToProps = (state) => ({
    pages: state.pages,
    loading: state.loading,
    errors: state.loading,
    fields: state.fields
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut()),
    fetchPages: () => dispatch(fetchPages()),
    fetchPage: (pageName) => dispatch(fetchPage(pageName)),
    updatePage: (page) => dispatch(updatePage(page)),
    clearErrors: (errors) => dispatch(receiveErrors(errors)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);