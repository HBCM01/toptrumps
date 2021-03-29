import { configureStore } from "@reduxjs/toolkit";
import  turnSlice from "./turnSlice";
import gameStateSlice from "./gameStateSlice"

export default configureStore({
    reducer: {
        turnCounter: turnSlice,
        gameState: gameStateSlice
    }
})