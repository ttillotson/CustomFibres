import * as PageAPIUtil from '../util/page_api_util';

export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const RECEIVE_PAGE_ERRORS = 'RECEIVE_PAGE_ERRORS';

const receivePages = (pages) => ({
    type: RECEIVE_PAGES,
    pages
});

const receivePageErrors = () => ({
    type: RECEIVE_PAGE_ERRORS
});

export const fetchPages = () => (dispatch) => (
    PageAPIUtil.fetchPages().then(ajaxPages => (
        dispatch(receivePages(ajaxPages))
    ), errors => (
        dispatch(receivePageErrors(errors.responseJSON))
    ))
);
