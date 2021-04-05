import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playerScore } from '../../redux/playerScoreSlice';
import { computerPlayerActive } from "../../redux/computerPlayerScoreSlice";
import { swapPlayer } from "../../redux/activePlayerSlice";
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

const TrumpCard = ({ playerStats, isHuman, player }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const humanPlayerActive = useSelector(state => state.activePlayer);
  const compPlayerActive = useSelector(state => state.computerPlayerActive);
  const comparisonData = useSelector(state => state.trumpStat.value);
  const dispatch = useDispatch();
  const [successStyle, setSuccessStyle] = useState(null);
  const [wrongChoice, setWrongChoice] = useState(false);
  const statTitle = Object.keys(playerStats);
  const imageUrl = Player_Placeholder_image;

  useEffect(() => {
   
  }, [successStyle, activeIndex, compPlayerActive]);

  const compSelection = () => {
    let arr = Object.values(playerStats);
    arr.shift()
    let oneOrZero = (Math.random()>=0.5)? 1 : 0;
    let compChoices = []
    compChoices.push(Math.min(...arr));
    compChoices.push(Math.max(...arr));
    const key = Object.keys(playerStats).find(key => playerStats[key] === compChoices[oneOrZero]);
    const computerSelection = { [key]: playerStats[key]}
    submitStat(computerSelection, key)
  }
  const submitStat = ( playerSelection, title ) => {
    let compareAgainst = {};
    let opponent = '';
    console.log( comparisonData)
    if (player === "playerA") {
      compareAgainst = comparisonData[1];
      opponent = "playerB";
    } else {
      compareAgainst = comparisonData[0];
      opponent = "playerB";
    }; 

    if ( playerSelection[title] > compareAgainst[opponent][title]) {
      setSuccessStyle(true);
      dispatch(playerScore());
    } else {
      setSuccessStyle(false);
      setWrongChoice(true);
    }
  };

  const handleClickStyle = (title, index) => {
    const playerSelection = { [statTitle[index]]: playerStats[title]};
    if(isHuman) {
      setActiveIndex(index);
      setTimeout(() => {  submitStat(playerSelection, title); }, 1000);
      dispatch(computerPlayerActive());
      setTimeout(() => {setSuccessStyle(false)}, 2000);
      setTimeout(() => { dispatch(swapPlayer(false))}, 2000);
    } else if(compPlayerActive) {
      compSelection()
    }
  };

  if ((humanPlayerActive && isHuman) || (compPlayerActive && !isHuman)) {

    return (
      <CardWrapper>
        <CardHeader>
          <CardHeading>{playerStats.name}</CardHeading>
          <ImageHolder imageUrl={imageUrl}/>
        </CardHeader>
        {statTitle.map((title, index) => {
          return (
            <StatWrapper key={index} onClick={() => handleClickStyle(title, index) }>
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
