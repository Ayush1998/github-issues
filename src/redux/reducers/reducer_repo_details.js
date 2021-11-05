import { WATCH, STAR, FORK } from '../types'

const INITIAL_STATE = {
    isWatch: false,
    watchCount: 1300,
    isForked: false,
    forkCount: 375,
    isStar: false,
    starCount: 8049
}
export default function repoDetailsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case `${WATCH}_INCREMENT`:
            return { ...state, isWatch: true, watchCount: state.watchCount + 1 };
        case `${WATCH}_DECREMENT`:
            return { ...state, isWatch: false, watchCount: state.watchCount - 1 };
        case `${FORK}_INCREMENT`:
            return { ...state, isForked: true, forkCount: state.forkCount + 1 };
        case `${FORK}_DECREMENT`:
            return { ...state, isForked: false, forkCount: state.forkCount - 1 };
        case `${STAR}_INCREMENT`:
            return { ...state, isStar: true, starCount: state.starCount + 1 };
        case `${STAR}_DECREMENT`:
            return { ...state, isStar: false, starCount: state.starCount - 1 };
        default:
            return state;
    }
}