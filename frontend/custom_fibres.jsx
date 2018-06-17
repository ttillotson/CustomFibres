import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preLoadedState = { session: {currentUser: window.currentUser}};
        store = configStore(preLoadedState);
        delete window.currentUser;
    } else {
        store = configStore();
    }
    window.state = store.getState();

    ReactDOM.render(<Root store={store} />, root);
});