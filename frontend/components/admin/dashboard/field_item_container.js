import { connect } from 'react-redux';
import { updateField,
         destroyField,
         receiveErrors,
         destroyImage } from '../../../actions/field_actions';
import FieldItem from './field_item';

const mapStateToProps = (state, ownProps) => {
    return ({
        field: state.fields[ownProps.fieldId],
        pageId: ownProps.pageId,
        loading: state.loading.fieldsLoading,
        errors: state.errors.field,
        savedImages: state.fields[ownProps.fieldId].images,
    });
};

const mapDispatchToProps = (dispatch) => ({
    submitField: (field) => dispatch(updateField(field)),
    clearErrors: (errors) => dispatch(receiveErrors(errors)),
    removeField: (fieldId) => dispatch(destroyField(fieldId)),
    removeImage: (imageId) => dispatch(destroyImage(imageId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FieldItem);