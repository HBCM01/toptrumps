import { createSlice } from '@reduxjs/toolkit';

export const playerScoreSlice = createSlice({
    name: 'playerScore', 
    initialState: {
        value: { player: 0, opponent: 0 }
    }, 
    reducers: {
        playerScore: (state) =>  {
            state.value.player += 10
            return state
        },
        opponentScore: (state) => {
            state.value.opponent += 10
            return state
        },
    }                     
})

export const { playerScore, opponentScore } = playerScoreSlice.actions;
export default playerScoreSlice.reducer;