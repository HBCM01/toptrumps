import { configureStore } from "@reduxjs/toolkit";
import  turnSlice from "./turnSlice";

export default configureStore({
    reducer: {
        turnCounter: turnSlice
    }
})