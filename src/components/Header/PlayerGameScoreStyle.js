import styled from "styled-components";


export const PlayerGameScoreWrapper = styled.div.attrs(props => ({
    visibility: props.playerScoreStyling.visibility
    
}))`
    background: #C4C4C4;
    border-radius: 24px;
    width: fit-content;
    visibility: ${props => props.playerScoreStyling.visibility};
    display: inline;
`;