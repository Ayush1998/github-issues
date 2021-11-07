import { GIT_ISSUE_ENDPOINT } from "../../constants"
import { FORK, WATCH, STAR, ISSUES } from "../types"

export const getIssues = (page) => (dispatch, getState) => {

    const state = getState();

    const callApi = async () => {
        const url = `${GIT_ISSUE_ENDPOINT}?per_page=20&&page=${page}`
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            let res_data = await res.json();
            if (res.status === 500) {
                throw res;
            }
            if (res.status === 401) {
                const error = res_data
                if (error) {
                    dispatch({ type: `${ISSUES}_failed`, payload: error })
                }
            }
            if (res.status !== 200) {
                throw res_data;
            } else {
                const issues = state.issues.data || [];
                if (page > 1 && issues.length) {
                    res_data = [...issues, ...res_data];
                }
                dispatch({ type: `${ISSUES}_success`, payload: res_data })
            }
        } catch (err) {
            console.log(err)
        }
    }
    dispatch({ type: `${ISSUES}_started` })
    return Promise.resolve(callApi());
}
export const addToWatch = () => (dispatch) => {
    dispatch({ type: `${WATCH}_INCREMENT` })
}
export const removeFromWatch = () => (dispatch) => {
    dispatch({ type: `${WATCH}_DECREMENT` })
}
export const addToStar = () => (dispatch) => {
    dispatch({ type: `${STAR}_INCREMENT` })
}
export const removeFromStar = () => (dispatch) => {
    dispatch({ type: `${STAR}_DECREMENT` })
}
export const addToFork = () => (dispatch) => {
    dispatch({ type: `${FORK}_INCREMENT` })
}
export const removeFromFork = () => (dispatch) => {
    dispatch({ type: `${FORK}_DECREMENT` })
}
