import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { RoundCounterWrapper, RoundCounterBody } from './RoundCounterStyle';

const RoundCounter = () => {
    const roundCount = useSelector(state => state.turnCounter.value)
    const [activeRoundStyling, setActiveRoundStyling] = useState(false)
    const gameRounds = [1 + " " , 2 + " " , 3 + " ", 4 + " ", 5 + " ",  6 + " "];
    
    useEffect(()=> {
        
    }, [roundCount]);
    

    return (
        <RoundCounterWrapper>  
            {gameRounds.map((r) => {  
                    console.log(r)
                    return (
                        <RoundCounterBody key={r} activeRoundStyling>{r}</RoundCounterBody>
                        ) 
            })}     
        </RoundCounterWrapper>
    );
}

export default RoundCounter;