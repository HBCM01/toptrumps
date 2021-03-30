import React from 'react';

import { CardWrapper, ImageHolder, ImageWrapper } from "./CardStyle";
import Man_United_Logo_png from '../../assets/Man_United_Logo.png';


const ReverseTrumpCard = () => {
    const imageUrl = Man_United_Logo_png
   
    return (
        <CardWrapper>
            <ImageWrapper>
                <ImageHolder imageUrl={imageUrl} />
            </ImageWrapper>
        </CardWrapper>
    )
}

export default ReverseTrumpCard;