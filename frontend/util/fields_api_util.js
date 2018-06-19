const fetchFields = (pageId) => (
    $.ajax({
        url: `/api/pages/${pageId}/fields`,
        method: 'GET'
    })
);

const fetchField = (fieldId) => (
    $.ajax({
        url: `/api/fields/${fieldId}`,
        method: 'GET'
    })
);

const createField = (field) => (
    $.ajax({
        url: `/api/fields`,
        method: 'POST',
        data: { field }
    })
);

const updateField = (field) => (
    $.ajax({
        url: `/api/fields/${field.id}`,
        method: 'PATCH',
        data: { field }
    })
);

const destroyField = (fieldId) => (
    $.ajax({
        url: `/api/fields/${fieldId}`,
        method: 'DELETE'
    })
);