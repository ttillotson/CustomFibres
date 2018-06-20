export const selectPageFields = (state, page) => (
    page ? page.fields.map(field => state.fields[field.id]) : []
);