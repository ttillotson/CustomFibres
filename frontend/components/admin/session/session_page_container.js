import { connect } from 'react-redux';
import AdminForm from './session_page';
import { signIn, receiveSessionErrors } from '../../../actions/session_actions';

const mapStateToProps = (state) => ({
    session: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    signIn: user => dispatch(signIn(user)),
    clearErrors: errors => dispatch(receiveSessionErrors(errors))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminForm);