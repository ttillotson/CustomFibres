import * as FieldAPIUtil from '../util/fields_api_util';

export const RECEIVE_ALL_FIELDS = 'RECEIVE_FIELDS';
export const RECEIVE_FIELD = 'RECEIVE_FIELD';
export const REMOVE_FIELD = 'REMOVE_FIELD';
export const START_LOADING_ALL_FIELDS = 'START_LOADING_ALL_FIELDS';
export const START_LOADING_FIELD = 'START_LOADING_FIELD';
export const RECEIVE_FIELD_ERRORS = 'RECEIVE_FIELD_ERRORS';

const receiveAllFields = (fields) => ({
    type: RECEIVE_ALL_FIELDS,
    fields
});

const receiveField = (field) => ({
    type: RECEIVE_FIELD,
    field
});

const removeField = (field) => ({
    type: REMOVE_FIELD,
    field
});

const startLoadingAllFields = () => ({
    type: START_LOADING_ALL_FIELDS
});

const startLoadingField = () => ({
    type: START_LOADING_FIELD
});

const receiveFieldErrors = () => ({
    type: RECEIVE_FIELD_ERRORS
});

export const fetchAllFields = (pageId) => (dispatch) => {
    dispatch(startLoadingAllFields());
    return FieldAPIUtil.fetchFields().then(ajaxFields => (
        dispatch(receiveAllFields(ajaxFields))
    ), errors => (
        dispatch(receiveFieldErrors(errors.responseJSON))
    ));
};

export const createField = (field) => (dispatch) => {
    dispatch(startLoadingField());
    return FieldAPIUtil.createField(field).then(ajaxField => (
        dispatch(receiveField(ajaxField))
    ), errors => (
        dispatch(receiveFieldErrors(errors.responseJSON))
    ));
};

export const updateField = (field) => (dispatch) => {
    dispatch(startLoadingField());
    return FieldAPIUtil.updateField(field).then(ajaxField => (
        dispatch(receiveField(ajaxField))
    ), errors => (
        dispatch(receiveFieldErrors(errors.responseJSON))
    ));
};

export const destroyField = (fieldId) => (dispatch) => {
    dispatch(startLoadingField());
    return FieldAPIUtil.destroyField(fieldId).then((removedField) => (
        dispatch(removeField(removedField))
    ), errors => (
        dispatch(receiveFieldErrors(errors.responseJSON))
    ));
};

export const destroyImage = (imageId) => (dispatch) => {
    dispatch(startLoadingField());
    return FieldAPIUtil.destroyImage(imageId).then(updatedField => (
        dispatch(receiveField(updatedField))
    ), errors => (
        dispatch(receiveFieldErrors(errors.responseJSON))
    ));
};