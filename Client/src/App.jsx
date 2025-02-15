import ChildComponent from "./component /childComponent";


const App = () => {

  const messageFromChild = (message) => {
    console.log(message);
  }
  return <ChildComponent messageFromChild={messageFromChild} />
}

export default App