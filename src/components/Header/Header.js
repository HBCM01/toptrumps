import React from 'react';

import {HeaderContainer } from './HeaderStyle';
import RoundCounter from './RoundCounter';
import PlayerGameScore from './PlayerGameScore';

const Header = () => {
    return (
        <HeaderContainer>
            <PlayerGameScore player={'You'}/>
            <RoundCounter />
            <PlayerGameScore player={'Opponent'}/>
        </HeaderContainer>
    );
}

export default Header;