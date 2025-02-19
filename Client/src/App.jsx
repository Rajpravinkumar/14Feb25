const App = () => {

  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  function handleLike() {
    setLikes(likes + 1);
  }

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const handleReset = () => {
    setCount(0);
  function handleDislike() {
    setDislikes(dislikes + 1);
  }
