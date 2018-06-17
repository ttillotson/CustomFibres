import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { signOut, receiveErrors } from '../../../actions/session_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut()),
    clearErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);