import './App.css';
import Increment from './Components/Increment';
import Decrement from './Components/Decrement';
import { useState } from 'react';

import { useSelector } from "react-redux";

function App() {

  let count = useSelector(store=>store);
  console.log(count);

  let [state, setData] = useState(0);
  let Plus = () => {
    state += 1;
    setData(state);
  }

  let Minus = () => {
    state -= 1;
    setData(state);
  }
  return (
    <div className="App">
      {/* <Increment click={Plus} />
      <h1>{state}</h1>
      <Decrement click={Minus} /> */}
    </div>
  );
}

export default App;
