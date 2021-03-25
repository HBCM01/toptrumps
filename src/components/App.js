import React from 'react';

import "../styles.css";
import TrumpCard from './Card/TrumpCard';
import Header from './Header/Header';
import StartButton from './Button/StartButton';
import PlayerCounter from './PlayerCounter/PlayerCounter';

const stats = 
    [{playerA: {
        name: "Bob Jones",
        age: 24,
        totalAppearances: 39,
        totalGoals: 52,
        redCards: 3,
        yellowCards: 4
    }}, {playerB: {
        name: "Nigel Smith",
        age: 24,
        totalAppearances: 39,
        totalGoals: 52,
        redCards: 3,
        yellowCards: 4
    }}]

const App = () => {
   
    return (
        <div className='App'>
            <Header />
            <div className='GameContainer'>
                <TrumpCard playerStats={stats[0].playerA}/>
                <StartButton />
                <TrumpCard playerStats={stats[1].playerB}/>
            </div>
            <div className="GameContainer">
                <PlayerCounter />
                <PlayerCounter />   
            </div>
        </div>
    );
}

export default App;