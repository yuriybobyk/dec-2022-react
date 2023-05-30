import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload
        }
    }
})

const {reducer: userReducer, actions} = userSlice;

const userActions = {
    ...actions
}

export {
    userReducer,
    userActions
}