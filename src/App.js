import {react, useState, createContext, useContext } from 'react';
import './App.css';
// const myContext
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Abdishakuur')

  return (

    <div className="App">
      <h1>{name}</h1>
      <h2>{count}</h2>
      <button onClick={() => setName('Abhishek')}>Change Name</button>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      
      <h1>hello</h1>
    </div>
  );
}

export default App;
