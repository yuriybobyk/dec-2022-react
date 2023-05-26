import {baseActions} from "../actions";

const initialState = {
    comments: []
}

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case baseActions.GET_COMMENTS:
            return {...state, comments: [...action.payload]}
        default:
            return state
    }
}