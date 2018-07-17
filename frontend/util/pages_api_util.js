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


