import { createSlice } from '@reduxjs/toolkit';

export const activePlayerSlice = createSlice({
    name: 'activePlayer', 
    initialState: {player: 0, computer: 0}, 
    reducers: {
        startWithPlayer: (state) => {
           return { player: 1, computer: 0};
        },
        switchPlayer: state => {
            
            if(state.player === 1) {
                return {player: 0, computer: 1};
            } 
            return {player: 1, computer: 0};
        }
    }   
})

export const { startWithPlayer, switchPlayer } = activePlayerSlice.actions;
export default activePlayerSlice.reducer ;