import {baseActions} from "../actions";

const initialState ={
    posts: []
}

export const postReducer = (state=initialState, action) =>{
    switch (action.type){
        case baseActions.GET_POSTS :
            return {...state, posts: [...action.payload]}
        default:
            return state
    }

}