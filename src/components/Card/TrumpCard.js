import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playerScore } from '../../redux/playerScoreSlice';
import {  switchPlayer } from "../../redux/activePlayerSlice";
import Player_Placeholder_image from "../../assets/Person_Placeholder_image.png";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  StatWrapper,
  StatBody,
  ImageHolder,
} from "./CardStyle";
import ReverseTrumpCard from "./ReverseTrumpCard";

const TrumpCard = ({ playerStats, isVisible, player }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const playerActive = useSelector(state => state.activePlayer);
  const comparisonData = useSelector(state => state.trumpStat.value);
  const dispatch = useDispatch();
  const [successStyle, setSuccessStyle] = useState(null);
  const [wrongChoice, setWrongChoice] = useState(false);
  const statTitle = Object.keys(playerStats);
  const imageUrl = Player_Placeholder_image;

  useEffect(() => {}, [activeIndex, successStyle, playerActive]);

  const computerSelection = () => {
    let arr = Object.values(playerStats);
    arr.shift();
    let oneOrZero = (Math.random()>=0.5)? 1 : 0;
    let compChoices = [];
    compChoices.push(Math.min(...arr));
    compChoices.push(Math.max(...arr));
    const key = Object.keys(playerStats).find(key => playerStats[key] === compChoices[oneOrZero]);
    const compSelection = { [key]: playerStats[key]}
     const compIndex = statTitle.map((element, index) => { return element}).indexOf(key);
    submitStat(compSelection, key);
    createSelection(key, compIndex);
  }

  const submitStat = ( playerSelection, title ) => {
    let compareAgainst = {};
    let opponent = '';
    
    if (player === "playerA") {
      compareAgainst = comparisonData[1];
      opponent = "playerB";
    } else {
      compareAgainst = comparisonData[0];
      opponent = "playerA"; 
    }; 
   
    if ( playerSelection[title] > compareAgainst[opponent][title]) {
      setSuccessStyle(true);
      dispatch(playerScore());
    } else {
      setSuccessStyle(false);
      setWrongChoice(true);
    }
  };

  const createSelection = (title, index) => {
    const playerSelection = { [statTitle[index]]: playerStats[title]};
       setActiveIndex(index);
       setTimeout(() => {  submitStat(playerSelection, title); }, 1000);
       setTimeout(() => {setSuccessStyle(false)}, 2000);
  }

  const handleClickStyle = (title, index) => {
        createSelection(title, index);
        dispatch(switchPlayer()); 
        if (playerActive.computer === 1) {
          setTimeout(computerSelection(), 3000);
        } 
  };

  if (( playerActive.player === 1 && isVisible) || (playerActive.computer === 1 && !isVisible))  {

    return (
      <CardWrapper>
        <CardHeader>
          <CardHeading>{playerStats.name}</CardHeading>
          <ImageHolder imageUrl={imageUrl}/>
        </CardHeader>
        {statTitle.map((title, index) => {
          return (
            <StatWrapper key={index} onClick={() => handleClickStyle(title, index)}>
              <StatBody isSelected={index === activeIndex} isSuccesful={ successStyle && index === activeIndex} isWrongChoice={wrongChoice && index === activeIndex} >
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
