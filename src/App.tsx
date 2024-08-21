import { useState } from 'react';
import './App.css';
import { Practice1 } from './practices/Practice1';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Practice1></Practice1>
      </div>
    </>
  );
}

export default App;
