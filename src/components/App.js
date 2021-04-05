import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { trumpStat } from '../redux/trumpStatSlice'

import "../styles.css";
import TrumpCard from './Card/TrumpCard';
import Header from './Header/Header';
import StartButton from './Button/StartButton';
import PlayerCounter from './PlayerCounter/PlayerCounter';

export const stats = 
    [{playerA: {
        name: "Bob Jones",
        age: 24,
        totalAppearances: 39,
        totalGoals: 52,
        redCards: 3,
        yellowCards: 4
    }}, {playerB: {
        name: "Nigel Smith",
        age: 20,
        totalAppearances: 30,
        totalGoals: 5,
        redCards: 1,
        yellowCards: 5
    }}]


const App = () => {
    const isGameActive = useSelector(state => state.gameState.value);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(trumpStat(stats))
    }, [isGameActive, dispatch])

        return (
            <div className='App'>
                <Header />
                <div className='GameContainer'>
                    <TrumpCard playerStats={stats[0].playerA} isHuman={true} player={'playerA'}/>
                    <StartButton />
                    <TrumpCard playerStats={stats[1].playerB} isHuman={false} player={'playerB'}/>
                </div>
                <div className="GameContainer">
                    <PlayerCounter isHuman={true}/>
                    <PlayerCounter isHuman={false}/>   
                </div>
            </div>)
}

export default App;