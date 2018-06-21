import { connect } from 'react-redux';
import { updateField, receiveErrors } from '../../../actions/field_actions';
import FieldItem from './field_item';

const mapStateToProps = (state, ownProps) => {
    debugger;

    // check ownProps, loading, errors
    return ({
        field: state.fields[ownProps.fieldId],
        pageId: ownProps.pageId,
        loading: state.fieldLoading,
        errors: state.errors.field,
    });
};

const mapDispatchToProps = (dispatch) => ({
    updateField: (field) => dispatch(updateField(field)),
    clearErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FieldItem);