export const fetchFields = (pageId) => (
    $.ajax({
        url: `/api/pages/${pageId}/fields`,
        method: 'GET'
    })
);

export const fetchField = (fieldId) => (
    $.ajax({
        url: `/api/fields/${fieldId}`,
        method: 'GET'
    })
);

export const createField = (field) => (
    $.ajax({
        url: `/api/fields`,
        method: 'POST',
        data: { field }
    })
);

export const updateField = (field) => (
    $.ajax({
        url: `/api/fields/${field.id}`,
        method: 'PATCH',
        data: { field }
    })
);

export const destroyField = (fieldId) => (
    $.ajax({
        url: `/api/fields/${fieldId}`,
        method: 'DELETE'
    })
);