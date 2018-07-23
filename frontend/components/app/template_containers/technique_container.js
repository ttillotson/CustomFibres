import Template from '../template';
import { fetchPage } from '../../../actions/page_actions';
import { connect } from 'react-redux';
import { selectPageFields } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const page = state.pages['Technique'];

    return ({
        fields: selectPageFields(state, page),
        loading: state.loading.pageLoading,
        errors: state.errors.pageLoading,
        page: page,
        pageName: "Technique",
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPage: (pageName) => dispatch(fetchPage(pageName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);