export const selectPageFields = (state, page) => (
    page ? page.fieldIds.map(fieldId => state.fields[fieldId]) : []
);