import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// Action Creators
export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

// Thunk Action Creators

export const signUp = (user) => (dispatch) => {
    ApiUtil.signUp(user)
        .then( resUser => dispatch(receiveCurrentUser(resUser)) );
};

export const login = (user) => (dispatch) => {
    ApiUtil.login(user)
        .then( resUser => dispatch(receiveCurrentUser(resUser)) );
};

export const logout = () => (dispatch) => {
    ApiUtil.logout()
        .then( res => dispatch(logoutCurrentUser()) );
};