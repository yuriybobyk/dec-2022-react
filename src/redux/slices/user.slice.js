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
        },
        create: (state, action) => {
            state.users.push(action.payload.user)
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