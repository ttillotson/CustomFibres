import { connect } from 'react-redux';
import { updateField,
         destroyField,
         receiveErrors } from '../../../actions/field_actions';
import FieldItem from './field_item';

const mapStateToProps = (state, ownProps) => {
    return ({
        field: state.fields[ownProps.fieldId],
        pageId: ownProps.pageId,
        loading: state.loading.fieldsLoading,
        errors: state.errors.field,
    });
};

const mapDispatchToProps = (dispatch) => ({
    submitField: (field) => dispatch(updateField(field)),
    clearErrors: (errors) => dispatch(receiveErrors(errors)),
    removeField: (fieldId) => dispatch(destroyField(fieldId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FieldItem);