import { useState } from "react";


function App() {

  const [valueOfCount , setValueOfCount ] = useState(0);

  const handleDecrement=()=>{
    setValueOfCount((prevValue)=>prevValue-1);
  }

  const handleIncrement=()=>{
    setValueOfCount((prevValue)=>prevValue+1);
  }

  return (
    <div>
      <h1>Counter App</h1>
      Count: {valueOfCount}
      <br></br>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
