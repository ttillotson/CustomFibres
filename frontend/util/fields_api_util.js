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
        data: field,
        dataType: "json",
        processData: false,
        contentType: false
    })
);

export const updateField = (field) => (
    $.ajax({
        url: `/api/fields/${field.id}`,
        method: 'PATCH',
        data:  field,
        dataType: "json",
        processData: false,
        contentType: false
    })
);

export const destroyField = (fieldId) => (
    $.ajax({
        url: `/api/fields/${fieldId}`,
        method: 'DELETE'
    })
);

export const destroyImage = (payload) => (
    $.ajax({
        url: `/api/fields/${payload.imageId}/destroy_attached_image`,
        method: `DELETE`,
        data:  payload,
        dataType: "json",
        processData: false,
        contentType: false
    })
);