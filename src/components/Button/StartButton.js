import React, { useState, useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { incrementRound } from '../../redux/turnSlice';
import { startGame } from '../../redux/gameStateSlice'
import { SButton } from './StartButtonStyle.js';

const StartButton = () => {
    const [timer, setTimer ] = useState(5);
    const [isRoundActive, setIsRoundActive] = useState(false);
    const [roundCounter, setRoundCounter] = useState(1);
    const dispatch = useDispatch();
    const [buttonBackground, setButtonBackground] = useState( {background: "#C4C4C4", color: "rgb(0,0,0)"} );

    const roundReset = () => {
        setIsRoundActive(false);
        setRoundCounter(1);
        setButtonBackground({background: "#C4C4C4", color: "rgb(0,0,0)"});
        
    };
    
    useEffect(() => {
        const roundTimer = () => {
            let counter = roundCounter;
                timer > 0 && setTimeout(() => setTimer(timer - 1), 1000); 
                    if(timer === 0) {
                        counter +=1;
                        setRoundCounter(counter);
                        dispatch(incrementRound(counter))
                        setTimer(5);               
                    }     
            }
            
        if(isRoundActive && roundCounter <= 6) {
            roundTimer();
           }  else {
            roundReset()
           }           
    }, [isRoundActive, timer, roundCounter]);

    const startRound = () => {
        if (!isRoundActive) {
            dispatch(startGame(true))
            setIsRoundActive(true);
        } else {
            setRoundCounter(false)
        }
        setButtonBackground({background: "#FDB901", color: "#EF1D1E"})
    };

    return (
        <SButton onClick={startRound}buttonBackground={buttonBackground} >{!isRoundActive ? 'start' : timer}</SButton>
    );
};

export default StartButton;