import React, {useState, useEffect} from 'react';
import { CardWrapper, CardHeader, CardHeading, StatWrapper, StatBody, ImageHolder } from './CardStyle';

const TrumpCard = ({playerStats}) => {
    const [ activeIndex, setActiveIndex ]= useState(null)
    const [statOnClickStyle, setStatOnClickStyle] = useState({background: "#646262", color: "#BDBDBD"})

    const statTitle = Object.keys(playerStats)
    useEffect(() => {
        
    }, [activeIndex])
    
    const handleClickStyle = (index) => {
        setActiveIndex({activeIndex: index})
        setStatOnClickStyle({background: "#919090", color: "#EF1D1E"})
    }

    return (
        <CardWrapper>
            <CardHeader>
                <CardHeading>{playerStats.name}</CardHeading>
                <ImageHolder></ImageHolder>
            </CardHeader>    
            {statTitle.map((title, index) => { return (
                <StatWrapper key={index} onClick={() => handleClickStyle(index)}>
                    <StatBody statOnClickStyle={statOnClickStyle}> {title}: {playerStats[title]}</StatBody>
                </StatWrapper>
                )
            })}         
        </CardWrapper>
    );
}

export default TrumpCard;