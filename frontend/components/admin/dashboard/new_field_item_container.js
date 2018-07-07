import { connect } from 'react-redux';
import { createField, receiveErrors } from '../../../actions/field_actions';
import FieldItem from './field_item';

const mapStateToProps = (state, ownProps) => {
    const newField = { title: "",
                        body: ""};
    return ({
        field: newField,
        pageId: ownProps.pageId,
        loading: state.loading.fieldsLoading,
        errors: state.errors.field,
        images: []
    });
};

const mapDispatchToProps = (dispatch) => ({
    submitField: (field) => dispatch(createField(field)),
    clearErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FieldItem);