import { createSlice } from '@reduxjs/toolkit';

export const turnSlice = createSlice({
    name: 'turn', 
    initialState: {
        value: 1
    }, 
    reducers: {
        incrementRound: state => {
            if (state.value <= 6) 
            state.value += 1
        }
    }
})

export const { incrementRound } = turnSlice.actions;
export default turnSlice.reducer ;