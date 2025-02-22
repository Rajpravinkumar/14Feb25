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
