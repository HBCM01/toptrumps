import styled from "styled-components";

export const SButton = styled.button.attrs(props => ({
    background: props.buttonBackground.background || "#C4C4C4",
    color: props.buttonBackground.color
})) `
    height: fit-content;
    width: fit-content;
    padding: 16px;
    color: ${props => props.buttonBackground.color};
    background: ${props => props.buttonBackground.background};
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    outline: none;
    :hover {
        box-shadow: 0 0 10px #FDB901;
        border-style: solid;     
    };
    :active {
        box-shadow: 0 0 10px #FDB901;
        border-style: solid;  
    };
    
`;