import React, { useEffect } from 'react';

import { PlayerCounterWrapper, PlayerTitle, PlayerScore } from './PlayerCounterStyle';

const PlayerCounter = () => {
    
    return (
            <PlayerCounterWrapper>
                <PlayerTitle>Player Name </PlayerTitle>
                <PlayerScore>0</PlayerScore>
            </PlayerCounterWrapper>
    );
}

export default PlayerCounter