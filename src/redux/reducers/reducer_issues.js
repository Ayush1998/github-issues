import { ISSUES } from '../types'

const INITIAL_STATE = {
    data: [], isFetching: null, err: null
}
export default function issueReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case `${ISSUES}_started`:
            return { ...state, isFetching: true, err: null };
        case `${ISSUES}_success`:
            return { ...state, isFetching: false, data: action.payload };
        case `${ISSUES}_failed`:
            return { ...state, isFetching: false, err: action.payload };
        default:
            return state;
    }
}