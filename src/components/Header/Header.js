import React from 'react';

import RoundCounter from './RoundCounter';
import {HeaderContainer } from './HeaderStyle'

const Header = () => {
    return (
        <HeaderContainer>
            <RoundCounter />
        </HeaderContainer>
    );
}

export default Header;