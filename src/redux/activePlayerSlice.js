import { createSlice } from '@reduxjs/toolkit';

export const activePlayerSlice = createSlice({
    name: 'activePlayer', 
    initialState: {
        value: false
    }, 
    reducers: {
        activePlayer: state => {
            state.value = true
        }
    }
})

export const { activePlayer } = activePlayerSlice.actions;
export default activePlayerSlice.reducer ;