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