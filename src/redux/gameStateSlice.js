import { createSlice } from '@reduxjs/toolkit';

export const gameStateSlice = createSlice({
    name: 'startGame', 
    initialState: {
        value: false
    }, 
    reducers: {
        startGame: state => {
            if (!state.value)
            state.value = true
        },
    }
})

export const { startGame, activePlayer } = gameStateSlice.actions;
export default gameStateSlice.reducer ;