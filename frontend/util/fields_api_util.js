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

export const destroyImage = (imageId) => (
    $.ajax({
        url: `/api/fields/${imageId}/destroy_attached_image`,
        method: `DELETE`
    })
);