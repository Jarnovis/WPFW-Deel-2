import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// logica dice
function DiceButton({ id }) {
  const [number, setNumber] = useState(-1);

  const rollDice = () => {
    setNumber(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
      <button onClick={rollDice}>
        Dice {id} says {number !== -1 ? number : 'Roll me!'}
      </button>
    </div>
  );
}

// create and show dices
function Dice() {
  const dices = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4}
  ];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dice</h1>
      <div className="dice">
        {dices.map((dice) => (
          <DiceButton key={dice.id} id={dice.id} />
        ))}
      </div>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Dice;
