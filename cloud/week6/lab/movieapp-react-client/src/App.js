import './App.css';
import { useState, useEffect } from "react";

const MovieItem = ({ item }) => (
  <div className="movie-item">
    <p> Title: {item.title}</p>
    <p>Rating: {item.rating}</p>
    <p>Release: {item.release}</p>
    <hr />
  </div>
)
function App() {
  const [items, setItems] = useState();

  useEffect(() => {
    (
      async () => await fetch("http://localhost:4000/movies", { headers: { 'Accept': 'application/json' } })
        .then(resp => resp.json())
        .then(res => setItems(res))
        .catch()
    )()
  }, [])

  return (
    <div className="App">
      {items?.map(item => (
        <MovieItem key={item.id} item={item} />
      ))
      }
    </div>
  );
}

export default App;
