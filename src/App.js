import logo from './logo.svg';
import './App.scss';
import styled from 'styled-components';


const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: #4caf50;
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inlince-block;
  font-size:16px;
  cursor: pointer;
  transition: 0.5s all ease-in;

`

function App() {
  return (
    <div className="App">
      <button>Button</button>
      <StyledButton>Styled Button</StyledButton>
      <h1>Hello <a href='/'> My Link</a> </h1>

      <button class='my-butt'>My button</button>
    
    </div>
  );
}

export default App;
