import { createSlice } from '@reduxjs/toolkit';
import { stats } from '../components/App'
export const trumpStatSlice = createSlice({
    name: 'trumpStat', 
    initialState: {
        value: {}
    }, 
    reducers: {
        trumpStat: state => { 
            state.value = stats;
            
        },
    }
})

export const { trumpStat } = trumpStatSlice.actions;
export default trumpStatSlice.reducer ;