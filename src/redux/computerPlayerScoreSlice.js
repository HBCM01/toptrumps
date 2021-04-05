import { createSlice } from '@reduxjs/toolkit';

export const computerPlayerScoreSlice = createSlice({
    name: 'computerPlayerActive', 
    initialState: false, 
    reducers: {
        computerPlayerActive: state => true,
        
    }
})

export const { computerPlayerActive,  } = computerPlayerScoreSlice.actions;
export default computerPlayerScoreSlice.reducer ;