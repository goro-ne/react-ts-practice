import { useState } from 'react';
import './App.css';
import { Practice1 } from './practices/Practice1';
import { Practice2 } from './practices/Practice2';
import { Practice3 } from './practices/Practice3';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Practice1></Practice1>
        <Practice2></Practice2>
        <Practice3></Practice3>
      </div>
    </>
  );
}

export default App;
