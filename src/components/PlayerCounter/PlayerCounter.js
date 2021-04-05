import React, { useEffect } from 'react';
import { useSelector} from "react-redux";
// import { playerScore } from '../../redux/playerScoreSlice';

import { PlayerCounterWrapper, PlayerTitle, PlayerScore } from './PlayerCounterStyle';

const PlayerCounter = ({isHuman}) => {
    const PlayerRoundScore= useSelector(state => state.playerScore.value);

    useEffect(() => {
        console.log(isHuman)
    }, [PlayerRoundScore, isHuman])

    if (isHuman) {
     return (
                <PlayerCounterWrapper>
                    <PlayerTitle>Player Name </PlayerTitle>
                    <PlayerScore>{PlayerRoundScore.player}</PlayerScore>
                </PlayerCounterWrapper>
        );
    } else {
        return (
            <PlayerCounterWrapper>
                    <PlayerTitle>Player Name </PlayerTitle>
                    <PlayerScore>{PlayerRoundScore.opponent}</PlayerScore>
                </PlayerCounterWrapper>
        )
    }
}

export default PlayerCounter