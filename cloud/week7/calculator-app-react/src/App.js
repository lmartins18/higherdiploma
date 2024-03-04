import React, { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleOperation = (operation) => {
    fetch(`http://localhost:4000/${operation}?number1=${number1}&number2=${number2}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
          setResult('');
        } else {
          setResult(data.result);
          setError('');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <h1>Calculator App</h1>
      <div>
        <label>Number 1:</label>
        <input type="text" value={number1} onChange={(e) => setNumber1(e.target.value)} />
      </div>
      <div>
        <label>Number 2:</label>
        <input type="text" value={number2} onChange={(e) => setNumber2(e.target.value)} />
      </div>
      <div>
        <button onClick={() => handleOperation('sum')}>Add</button>
        <button onClick={() => handleOperation('multiply')}>Multiply</button>
        <button onClick={() => handleOperation('subtract')}>Subtract</button>
        <button onClick={() => handleOperation('divide')}>Divide</button>
      </div>
      {error && <div className="error">{error}</div>}
      {result && <div className="result">Result: {result}</div>}
    </div>
  );
}

export default App;
