import React from "react";
import { useSelector } from 'react-redux';
import { RoundCounterWrapper, RoundCounterBody } from './RoundCounterStyle';

const RoundCounter = () => {
    const roundCount = useSelector(state => state.turnCounter.value)
   
    const gameRounds = [1 , 2 , 3 , 4 , 5 ,  6 ];
    
    return (
        <RoundCounterWrapper>  
            {gameRounds.map((r) => {  
                    return (
                        <RoundCounterBody key={r} isSelected={r === roundCount } >{r}</RoundCounterBody>
                        ) 
            })}     
        </RoundCounterWrapper>
    );
}

export default RoundCounter;