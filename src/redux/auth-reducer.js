import {stopSubmit} from "redux-form";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'testapp/auth/SET_USER_DATA';

let initialState = {
    token: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (token, isAuth) => ({
    type: SET_USER_DATA, payload:
        {token, isAuth}
});

export const login = (username, password) => async (dispatch) => {

    try {
        let response = await authAPI.login(username, password);
        if (response.data.data.token) {
            dispatch(setAuthUserData(response.data.data.token, true));
            localStorage.setItem('rt', response.data.data.refresh_token);
        }
    } catch (error) {
        let message = error.response.data.error.message.length > 0 ? error.response.data.error.message : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }

}

export const refresh = () => async(dispatch) => {
    if(localStorage.getItem('rt')) {
        let refresh_token = localStorage.getItem('rt');
        try {
            let response = await authAPI.refresh(refresh_token);
            if (response.data.data.token) {
                dispatch(setAuthUserData(response.data.data.token, true));
                localStorage.setItem('rt', response.data.data.refresh_token);
            }
        } catch (error) {
            dispatch(setAuthUserData(null, false));
        }
    }
}

export const logout = () => (dispatch) => {
    dispatch(setAuthUserData(null, false));
    localStorage.removeItem('rt');
}

export default authReducer;