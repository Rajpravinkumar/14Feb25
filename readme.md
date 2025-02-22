# use callback Hooks

import { useCallback , useState} from "react";
import React  from "react";


const Counter =
  ({ onIncrement }) => {
    console.log('rendering...');

    return (
      <button onClick={onIncrement}>  Increment  </button>
  )
  }
const MemoizedCounter = React.memo(Counter);


const App = () => {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => {
  setCount ( prev => prev + 1 )
  }, []);
 
  return (
    <div>
      <p>
        count: {count}
      </p>
      <MemoizedCounter onIncrement = {increment} />
    </div>
  )
}

export default App


# use Memo Hooks

import { useMemo, useState } from "react";

const usememo = () => {
  const [state, setState] = useState(0);

  let computedValue = useMemo(() => {
    let sum = 0;

    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }

    return sum + state;
  }, [state]);
  return (
    <div>
      <h1>Computed Value: {computedValue}</h1>
      <button onClick={() => setState + 1}>Update State</button>
    </div>
  );
};

export default usememo;
