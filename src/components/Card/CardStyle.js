import styled from "styled-components";


export const CardWrapper = styled.div`
  background: #302b2c;
  margin: 49px auto 0;
  width: 30vw;
  border-radius: 24px;
`;
export const CardHeader = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const ImageHolder = styled.div.attrs((props) => ({
  backgroundImage: props.imageUrl,
}))`

  background-image: url(${props => props.imageUrl});
  background-color: #CCCCCC;
  border-style: solid;
  border-color: #FDB901;
  max-width: 80%;
  max-height: auto;
  height: 150px;
  padding: 24px;
  margin: 24px;
  border-radius: 24px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
`;

export const ImageWrapper = styled.div`
 
  margin: 40px;
  background: #312B2C;
`;
export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #a8a7a7;
`;

export const CardBody = styled.div`
  display: flex;
  padding-right: 16px;
  padding-left: 16px;
`;

export const StatWrapper = styled.div`
  padding: 8px;
  display: flex;
  margin: 0px 8px 0px 8px;
  :hover {
    box-shadow: 0 0 10px #fdb901;
    border-style: solid, #fdb901;
  }
`;

export const StatBody = styled.div.attrs((props) => ({
  isSelected: props.isSelected,
  isSuccesful: props.isSuccesful,
  isWrongChoice: props.isWrongChoice
}))`
  background: ${(props) => (props.isSuccesful ? "green" : "#646262") };
  color: ${(props) => (props.isSelected ? "red" : "white")};
  border-radius: 24px;
  align-items: center;
  max-width: 95%;
  padding: 8px;
  flex: 1;
`;
