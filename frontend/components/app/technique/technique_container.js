import Template from '../template';
import { fetchPage } from '../../../actions/page_actions';
import { connect } from 'react-redux';
import { selectPageFields } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const page = state.pages['2'];
    
    return ({
        fields: selectPageFields(state, page),
        loading: state.loading.pageLoading,
        name: "Technique"
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPage: (pageName) => dispatch(fetchPage(pageName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);