import { connect } from 'react-redux';
import Splash from './splash';
import { fetchPage } from '../../../actions/page_actions';
import { selectPageFields } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const page = state.pages[ownProps.match.params.pageId];

    return ({
        fields: selectPageFields(state, page)
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchPage: (pageId) => dispatch(fetchPage(pageId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);