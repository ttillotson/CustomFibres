const fetchPages = () => (
    $.ajax({
        url: '/api/pages',
        method: 'GET'
    })
);