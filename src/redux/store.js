import { configureStore } from "@reduxjs/toolkit";
import  turnSlice from "./turnSlice";
import gameStateSlice from "./gameStateSlice"
import activePlayerSlice from "./activePlayerSlice"
import trumpStatSlice from "./trumpStatSlice"

export default configureStore({

    reducer: {
        turnCounter: turnSlice,
        gameState: gameStateSlice,
        activePlayer: activePlayerSlice,
        trumpStat: trumpStatSlice
    }
})