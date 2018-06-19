import * as PageAPIUtil from '../util/pages_api_util';

export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const RECEIVE_PAGE_ERRORS = 'RECEIVE_PAGE_ERRORS';
export const START_LOADING_PAGES = 'START_LOADING_PAGES';

const receivePages = (pages) => ({
    type: RECEIVE_PAGES,
    pages
});

const receivePageErrors = () => ({
    type: RECEIVE_PAGE_ERRORS
});

const startLoadingPages = () => ({
    type: START_LOADING_PAGES
});

export const fetchPages = () => (dispatch) => {
    dispatch(startLoadingPages());
    return PageAPIUtil.fetchPages().then(ajaxPages => (
        dispatch(receivePages(ajaxPages))
    ), errors => (
        dispatch(receivePageErrors(errors.responseJSON))
    ));
};
