import {baseActions} from "../actions";

const initialState = {
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case baseActions.GET_USERS:
            return {...state, users: [...action.payload]}
        default:
            return state
    }
}