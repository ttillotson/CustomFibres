export const fetchPages = () => (
    $.ajax({
        url: '/api/pages',
        method: 'GET'
    })
);

export const fetchPage = (pageName) => (
    $.ajax({
        url: `/api/pages/${pageName}`,
        method: 'GET'
    })
);


export const updatePage = (page) => (
    $.ajax({
        url: `/api/pages/${page.name}`,
        method: 'PATCH',
        data: page,
        dataType: "json",
        processData: false,
        contentType: false
    })
);

export const destroyImage = (payload) => (
    $.ajax({
        url: `/api/pages/${payload.imageId}/destroy_attached_image`,
        method: `DELETE`,
        data:  payload,
        dataType: "json",
        processData: false,
        contentType: false
    })
);