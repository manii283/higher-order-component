import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>H O C </h1>
      <HocRed cmp={Counter} />
      <HocGreen cmp={Counter} />
    </div>
  );
}

function HocRed(props) {
  return (
    
    <h2 style={{backgroundColor: 'red', width: '100px'}}><props.cmp/></h2>
  )
}

function HocGreen(props) {
  return (
    
    <h2 style={{backgroundColor: 'green', width: '100px'}}><props.cmp/></h2>
 
    )
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
  <div>
    <h3>{count}</h3>
    <button onClick={() => {setCount(count + 1)}}>Update</button>
  </div>
  )
}

export default App;
