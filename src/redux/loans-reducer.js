import {loansAPI} from "../api/api";
import {refresh} from "./auth-reducer";

const SET_LOANS = 'testapp/loans/SET_LOANS';
const TOGGLE_IS_FETCHING = 'testapp/loans/TOGGLE_IS_FETCHING';
const SET_LOAN_DETAILS = 'testapp/loans/SET_LOAN_DETAILS';

let initialState = {
    loans: [],
    loan: null,
    isFetching: true
};

const loansReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOANS: {
            return {...state, loans: action.loans}
        }
        case SET_LOAN_DETAILS: {
            return {...state, loan: action.loan}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const setLoans = (loans) => ({type: SET_LOANS, loans})
export const setLoanDetails = (loan) => ({type: SET_LOAN_DETAILS, loan})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const requestLoans = (token) => async (dispatch) => {

    dispatch(toggleIsFetching(true));

    try {
        let response = await loansAPI.getLoans(token);
        dispatch(setLoans(response.data.data));
        dispatch(toggleIsFetching(false));

    } catch (error) {
        if(error.response.data.code) {
            dispatch(refresh());
        }
    }
}

export const requestLoanDetails = (token, id) => async (dispatch) => {

    dispatch(toggleIsFetching(true));

    try {
        let response = await loansAPI.getLoanDetails(token, id);
        dispatch(setLoanDetails(response.data.data));
        dispatch(toggleIsFetching(false));

    } catch (error) {
        if(error.response.data.code) {
            dispatch(refresh());
        }
    }
}


export default loansReducer;