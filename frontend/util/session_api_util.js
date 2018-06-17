export const signIn = (user) => (
    $.ajax({
        url: 'api/session',
        method: 'POST',
        data: { user }
    })
);

export const signOut = () => (
    $.ajax({
        url: 'api/session',
        method: 'DELETE'
    })
);