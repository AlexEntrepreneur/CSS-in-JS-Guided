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
    </div>
  );
}

const Button = styled.button`
  background: dodgerblue;
  color: white;
  font-size: 20px;
  padding: 10px;
  min-width: 150px;

  &:hover {
    transform: scale(1.2);
  }

  & span {
    color: red;
    font-weight: bold;
  }
`;

export default App;
