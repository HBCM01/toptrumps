import React, { useState, useEffect } from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  StatWrapper,
  StatBody,
  ImageHolder,
} from "./CardStyle";

const TrumpCard = ({ playerStats }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const statTitle = Object.keys(playerStats);

  useEffect(() => {}, [activeIndex]);

  const handleClickStyle = (index) => {
    setActiveIndex(index);
  };

  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>{playerStats.name}</CardHeading>
        <ImageHolder></ImageHolder>
      </CardHeader>
      {statTitle.map((title, index) => {
        return (
          <StatWrapper key={index} onClick={() => handleClickStyle(index)}>
            <StatBody isSelected={index === activeIndex}>
              {" "}
              {title}: {playerStats[title]}
            </StatBody>
          </StatWrapper>
        );
      })}
    </CardWrapper>
  );
};

export default TrumpCard;
