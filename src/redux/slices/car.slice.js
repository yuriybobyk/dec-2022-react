import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue} from "@reduxjs/toolkit";
import {carService} from "../../services/car.service";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI)=>{
        try {
            await carService.create(car)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    }
)

const update = createAsyncThunk(
    'carSlice/update',
    async ({id, car}, thunkAPI)=>{
        try {
            await carService.updateById(id, car)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/delete',
    async ({id}, thunkAPI)=>{
        try {
            await carService.deleteById(id)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
        changeTrigger: state => {
            state.trigger = !state.trigger
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(update.fulfilled, state => {
                state.carForUpdate = null
                state.trigger = !state.trigger
            })
            .addMatcher(isPending(), state => {
                state.loading = true
                state.error = null
            })
            .addMatcher(isFulfilled(), state => {
                state.loading = false
                state.error = null
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addMatcher(isFulfilled(create, update, deleteCar), state => {
                state.trigger = !state.trigger
            })
})


const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
}

export {
    carReducer,
    carActions
}
