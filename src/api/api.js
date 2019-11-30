import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://test-api.dengiclick.kz/',
    headers: {'Authorization': 'dev RNpwpsljbnkSS'}
});

export const authAPI = {
    login(username, password) {
        return instance.post(`api/login`, {username, password});
    },

    refresh (refresh_token) {
        return instance.post(`api/token/refresh`, {refresh_token});
    }
}

export const loansAPI = {
    getLoans(token) {
        return instance.get(`api/loans`, {params: {}, headers: {'Authorization': 'Bearer ' + token}});
    },

    getLoanDetails(token, id) {
        return instance.get(`api/loan/${id}/detail`, {params: {}, headers: {'Authorization': 'Bearer ' + token}});
    }
}