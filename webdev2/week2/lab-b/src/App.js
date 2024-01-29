import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/splash-screen">SplashScreen</Link>
        <Link to="/shopping-list">ShoppingList</Link>
      </header>
    </div>
  );
}

export default App;
