import styled from "styled-components";

export const RoundCounterWrapper = styled.div`
    background: #C4C4C4;
    border-radius: 24px;
    width: fit-content;
    margin: 88px;
    display: inline-block
   
    
`;

export const RoundCounterBody = styled.div.attrs(props => ({
    isSelectedr: props.isSelected,
    }))`
    color: ${(props) => (props.isSelected ? "red" : "000000")};
    padding: 8px; 
    font-size: 30px;
    display: inline-block;
`;