import { useState } from "react";

function App() {

  const [clicks, setClicks] = useState(0);
  const incrementClicks = () => setClicks(clicks + 1);
  const decrementClicks = () => setClicks(clicks - 1);

  return (
    <div className="App">
      <p>You clicked {clicks} times.</p>
      <button onClick={incrementClicks}>Increment clicks</button>
      <button onClick={decrementClicks}>Decrement clicks</button>
    </div>
  );
}

export default App;
