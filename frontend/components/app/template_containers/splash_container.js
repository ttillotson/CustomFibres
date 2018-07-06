import { connect } from 'react-redux';
import Template from '../template';
import { fetchPage } from '../../../actions/page_actions';
import { selectPageFields } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const page = state.pages['Splash'];
    const pageTitle = "";

    return ({
        fields: selectPageFields(state, page),
        loading: state.loading.pageLoading,
        errors: state.errors.pageLoading,
        pageName: "Splash",
        pageTitle: pageTitle
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPage: (pageName) => dispatch(fetchPage(pageName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);