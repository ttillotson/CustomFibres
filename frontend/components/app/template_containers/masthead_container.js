import MastHead from '../shared/masthead';
import { selectMastUrl } from '../../../reducers/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    imageUrl: selectMastUrl(state),
});

export default connect(
    mapStateToProps,
    null
)(MastHead);
