import { createSlice } from '@reduxjs/toolkit';

export const activePlayerSlice = createSlice({
    name: 'activePlayer', 
    initialState: false, 
    reducers: {
        activePlayer: state => true,
        swapPlayer: state => false
    }
})

export const { activePlayer, swapPlayer } = activePlayerSlice.actions;
export default activePlayerSlice.reducer ;