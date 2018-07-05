import Template from '../template';
import { fetchPage } from '../../../actions/page_actions';
import { connect } from 'react-redux';
import { selectPageFields } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const page = state.pages['Technique'];
    const pageTitle = "Available Options";

    return ({
        fields: selectPageFields(state, page),
        loading: state.loading.pageLoading,
        errors: state.errors.pageLoading,
        pageName: "Technique",
        pageTitle: pageTitle,
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPage: (pageName) => dispatch(fetchPage(pageName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);