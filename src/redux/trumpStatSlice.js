import { createSlice } from '@reduxjs/toolkit';
import { stats } from '../components/App'
export const trumpStatSlice = createSlice({
    name: 'trumpStat', 
    initialState: {
        value: {}
    }, 
    reducers: {
        trumpStat: state => { 
            state.value = stats
            console.log(state.value)
        },
    }
})

export const { trumpStat } = trumpStatSlice.actions;
export default trumpStatSlice.reducer ;