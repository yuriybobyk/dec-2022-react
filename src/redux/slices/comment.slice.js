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