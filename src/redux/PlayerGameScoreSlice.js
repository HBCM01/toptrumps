import { createSlice } from '@reduxjs/toolkit';

export const playerGameScoreSlice = createSlice({
    name: 'game score', 
    initialState: {
        value: { player: 0, computer: 0}
    }, 
    reducers: {
        playerScore: (state) =>  {
            state.value.player += 1
            return state
        },
        computerScore: (state) => state.computer ++
    }
})

export const { playerScore,  computerScore} = playerGameScoreSlice.actions;
export default playerGameScoreSlice.reducer ;

