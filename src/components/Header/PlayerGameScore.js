import React, {useState, useEffect} from 'react';
import { PlayerGameScoreWrapper} from './PlayerGameScoreStyle';
import { useSelector } from 'react-redux';

const PlayerGameScore = ({player}) => {
    const isGameActive = useSelector(state => state.gameState.value);
    const [playerScoreStyling, setPlayerScoreStyling] = useState({visibility: "hidden"});

    useEffect(()=> {
        if (isGameActive)
            setPlayerScoreStyling({visibility: "visible"});
    }, [isGameActive]);
    return (

        <PlayerGameScoreWrapper playerScoreStyling={playerScoreStyling}>{player} : 0</PlayerGameScoreWrapper>
    )
}

export default PlayerGameScore;