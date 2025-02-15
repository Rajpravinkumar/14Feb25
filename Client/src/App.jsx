
import B from "./component /B";


const App = () => {
  const time = new Date().toLocaleTimeString();
  return <B
    time= {time}
  />
}

export default App
