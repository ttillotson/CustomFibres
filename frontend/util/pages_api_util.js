const fetchPages = () => (
    $.ajax({
        url: '/api/pages',
        method: 'GET'
    })
);

const fetchPage = (pageId) => (
    $.ajax({
        url: '/api/page',
        method: 'GET'
    })
);