import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // Window Stuff
    window.login = ApiUtil.signup
    window.login = ApiUtil.login
    window.login = ApiUtil.logout
    // Window Stuff

    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root)
})