import { createSlice } from '@reduxjs/toolkit';

export const gameStateSlice = createSlice({
    name: 'startGame', 
    initialState: {
        value: false
    }, 
    reducers: {
        startGame: state => {
          state.value = true;
          return state;
        },
        endGame: state => state => {
            state.value = false;
            return state;
        }
    }
})

export const { startGame, endGame } = gameStateSlice.actions;
export default gameStateSlice.reducer ;