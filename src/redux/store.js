import { configureStore } from "@reduxjs/toolkit";
import  turnSlice from "./turnSlice";
import gameStateSlice from "./gameStateSlice";
import activePlayerSlice from "./activePlayerSlice";
import trumpStatSlice from "./trumpStatSlice";
import playerScoreSlice from "./playerScoreSlice";
import computerPlayerActiveSlice from "./computerPlayerScoreSlice";
import playerGameScoreSlice from "./PlayerGameScoreSlice";

export default configureStore({

    reducer: {
        turnCounter: turnSlice,
        gameState: gameStateSlice,
        activePlayer: activePlayerSlice,
        trumpStat: trumpStatSlice,
        playerScore: playerScoreSlice,
        computerPlayerActive: computerPlayerActiveSlice,
        gameScore: playerGameScoreSlice
    }
})