import React, { useState } from 'react';
import './App.css';

function App() {
  const [gameId, setGameId] = useState('');
  const [players, setPlayers] = useState([]);

  const startGame = async () => {
    // Call the backend to start the game
    try {
      const response = await fetch('http://localhost:5000/start-game', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gameId, players }),
      });

      const data = await response.json();
      alert(`Game started: ${data}`);
    } catch (error) {
      console.error('Error starting game:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wattland Game</h1>
        <input
          type="text"
          placeholder="Game ID"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Players (comma separated)"
          value={players.join(', ')}
          onChange={(e) => setPlayers(e.target.value.split(','))}
        />
        <button onClick={startGame}>Start Game</button>
      </header>
    </div>
  );
}

export default App;
