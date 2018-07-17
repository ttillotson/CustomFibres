export const selectPageFields = (state, page) => (
    page ? page.fieldIds.map(fieldId => state.fields[fieldId]) : []
);

export const selectMastUrl = (state) => (
    state.page["Splash"].imageUrls[0]
);