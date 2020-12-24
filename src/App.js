import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const theme = {
  blue: {
    default: '#3f51b5',
    hover: '#283593', 
  },
  pink: {
    default: '#e91e63',
    hover: '#ad1457', 
  }
}

const Tab = styled.button`
  background: white;
  opacity: .6;
  padding: 5px 15px;
  border: 0;
  border-bottom: 2px solid transparent;
  margin: 10px;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: ease border-bottom 250ms;
  ${({active})=> active && `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`

function TabGroup() {
  const [active, setActive ] = useState(types[0])

  return <div>
    {types.map(type => <Tab active= {active===type} onClick={()=>setActive(type)}
    >{type}</Tab>)}
  </div>
}

const Button = styled.button`
  background-color: ${props => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  margin: 10px;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 2px 2px lightgray;
  text-transform: uppercase;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover{
    background-color: ${props => theme[props.theme].hover};
  }
  &:disabled{
    cursor:default;
    opacity:.7;
  }
`

Button.defaultProps = {
  theme: 'blue',
}

function clickMe(){
  alert('Helle there!')
}

const ButtonToggle = styled(Button)`
  opacity: .7;
  ${({active})=> active && `
    opacity: 1;
  `}
`

const types = ['Cash', 'Credit', 'Bitcoin']

function ToggleGroup(){
  const [active, setActive ] = useState(types[0])

  return <div>
    {types.map(type=> <ButtonToggle active= {active===type} onClick={()=>setActive(type)}
    >{type}</ButtonToggle>)}
  </div>
} 

function App() {
  return (
    <div className="app">
      <Button onClick={clickMe}>  default </Button>

      <Button   theme="pink" onClick={clickMe} >pink theme</Button>

      <Button   disabled theme="pink" onClick={clickMe} >disabled</Button>

      <a href="https://google.com" target='_blank'>
        <Button  theme="pink" >Link</Button>
      </a>

      <ToggleGroup/>


      <TabGroup/>

    </div>
  );
}

export default App;
