import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Player_Placeholder_image from '../../assets/Person_Placeholder_image.png';
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  StatWrapper,
  StatBody,
  ImageHolder,
} from "./CardStyle";
import ReverseTrumpCard from "./ReverseTrumpCard";

const TrumpCard = ({ playerStats, isHuman, player }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const humanPlayerActive = useSelector(state => state.activePlayer.value)
  const comparisonData = useSelector(state => state.trumpStat.value)
  const [successStyle, setSuccessStyle] = useState(null)
  const statTitle = Object.keys(playerStats);
  const imageUrl = Player_Placeholder_image

  useEffect(() => {}, [successStyle, activeIndex]);

  const submitStat = ( playerSelection, title ) => {
    let compareAgainst = {}
    let opponent = ''

    if (player === 'playerA') {
      compareAgainst = comparisonData[1]
      opponent = 'playerB'
    } else {
      compareAgainst = comparisonData[0]
      opponent = 'playerB'
    }; 

    if ( playerSelection[title] > compareAgainst[opponent][title]) {
      console.log('winner')
      setSuccessStyle(true)
    } else {
      console.log('Bad luck')
      setSuccessStyle(false)
    }
    console.log(successStyle)
  
  };

  const handleClickStyle = (title, index) => {
    const playerSelection = { [statTitle[index]]: playerStats[title]}
    if(isHuman) {
      setActiveIndex(index);
      submitStat(playerSelection, title);
      
    }
  };

  if (humanPlayerActive && isHuman) {

    return (
      <CardWrapper>
        <CardHeader>
          <CardHeading>{playerStats.name}</CardHeading>
          <ImageHolder imageUrl={imageUrl}/>
        </CardHeader>
        {statTitle.map((title, index) => {
          return (
            <StatWrapper key={index} onClick={() => handleClickStyle(title, index) }>
              <StatBody isSelected={index === activeIndex} isSuccesful={ successStyle && index === activeIndex}>
                {" "}
                {title}: {playerStats[title]}
              </StatBody>
            </StatWrapper>
          );
        })}
      </CardWrapper>
    );
  } else {
    return <ReverseTrumpCard />
  }

};

export default TrumpCard;
