import React from "react";
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="nailpolish emoji">
          💅
        </span>{" "}
        Advanced Styling Techniques
      </h1>
      <Button>Some Text <span>Spanned</span></Button>
      <StyledDiv>
        <H1>Hello!</H1>
      </StyledDiv>
      {/* <Button huge>Some Text <span>Spanned</span></Button> */}
      <SmallButton>Inheritance!</SmallButton>
      <ZH1>Hello from h1!</ZH1>
      <ZH1 night>Hello from h1!</ZH1>
    </div>
  );
}

const Button = styled.button`
  background: dodgerblue;
  color: white;
  font-size: 20px;
  padding: 10px;
  min-width: 150px;
  transform: ${props => props.huge ? 'scale(2)' : 'unset'};

  &:hover {
    transform: scale(1.2);
  }

  span {
    color: red;
    font-weight: bold;
  }
`;

const SmallButton = styled(Button)`
  font-size: 14px;
  padding: 6px;
  min-width: 90px;
`;

const StyledDiv = styled.div`
  border: 3px solid coral;
  padding: 20px;
`;

const H1 =styled.h1`
  background: peachpuff;
  color:whitesmoke;
  font-size: 25px;
  font-family: 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding:  0px 0px 15px 15px;
  min-width: 120px;
  border-radius: 3px;
  &:hover {
     transform: scale(2);
  }
`;

const ZH1 = styled.h1`
  color: ${props => props.night ? 'red' : 'blue'};
  background: ${props => props.night ? 'black' : 'white'};
  padding: 20px;
  &:hover{
    color: ${props => props.night ? 'blue' : 'red'};
    background: ${props => props.night ? 'white' : 'black'};
  }
`;

export default App;
