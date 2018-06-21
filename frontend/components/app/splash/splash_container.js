import { connect } from 'react-redux';
import Splash from './splash';
import { fetchPage } from '../../../actions/page_actions';
import { selectPageFields } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const page = state.pages['1'];
    // debugger;

    return ({
        fields: selectPageFields(state, page),
        loading: state.loading.pageLoading
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPage: (pageName) => dispatch(fetchPage(pageName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);