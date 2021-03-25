import styled from "styled-components";

export const CardWrapper = styled.div`
    background: #302B2C;
    margin: 49px auto 0;
    width: 30vw;
    border-radius: 24px;
`;
export const CardHeader = styled.header`
    padding-top: 16px;
    padding-bottom: 16px
`;

export const ImageHolder = styled.div`
    background-image: url(https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
export const CardHeading = styled.h1`
    font-size: 24px;
    font-Weight: bold;
    text-align: center;
    color: #A8A7A7
`;

export const CardBody = styled.div `
    display: flex;
    padding-right: 16px;
    padding-left: 16px;
`;

export const StatWrapper = styled.div `
    padding: 8px;
    display: flex;
    margin: 0px 8px 0px 8px;
    :hover {
        box-shadow: 0 0 10px #FDB901;
        border-style: solid, #FDB901;
    };
    
`;

export const StatBody = styled.div.attrs(props => ({
    background: props.statOnClickStyle.background,
    color: props.statOnClickStyle.color
    }))`
    background: ${props => props.statOnClickStyle.background};
    color: ${props => props.statOnClickStyle.color};
    padding: 8px;
    flex: 1;
`;
