import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    comments: []
};

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.comments = action.payload
        },
        create: (state, action) => {
            state.comments.push(action.payload.comment)
        }
    }
})

const {reducer: commentReducer, actions} = commentSlice;

const commentActions = {
    ...actions
}

export {
    commentReducer,
    commentActions
}