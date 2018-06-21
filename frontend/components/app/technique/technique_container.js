import Technique from './technique';
import { fetchPage } from '../../../actions/page_actions';
import { connect } from 'react-redux';
import { selectPageFields } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const page = state.pages[ownProps.match.params.pageId];
    return ({
        fields: selectPageFields(state, page)
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPage: (pageName) => dispatch(fetchPage(pageName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Technique);