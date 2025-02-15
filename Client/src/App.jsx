import {useState} from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  console.log(count);

  const handleIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  
  const handleDecrease = () => {
   
    if (count > 0) {
       setCount(count -1)
    }
  }

  const handleReset = () => {
    setCount(0);
  }
return (
    <div>
      <h1> Counter:{count} </h1>
      <button
      onClick = {handleIncrease}>Increase

    </button>
    
    <button 
      onClick = {handleDecrease}
    >Decrease</button>

    <button onClick = {handleReset}> reset </button>
    </div>
  )
}

export default App