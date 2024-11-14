import React, { useState } from 'react';
import './App.css';
import {Link} from "react-router-dom";

const WORD_LIST = ["apple", "berry", "cherry", "grape", "lemon", "mango", "peach", "plumb", "melon", "guava"];

const getRandomWord = () => WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];

function SelectWord()
{
    const fs = require('fs');

    fs.readFile('../textFiles.Lingo.txt', (err, data) => {
    if (err) throw err;

    console.log(data.toString());
});


}

const WordleGame = () => {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord().toUpperCase());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const guess = event.target.value.toUpperCase();
    if (guess.length <= 5) {
      setCurrentGuess(guess);
    }
  };

  const handleSubmit = () => {
    if (currentGuess.length === 5) {
      if (currentGuess === wordToGuess) {
        setMessage('Congratulations! You guessed the word!');
      } else if (guesses.length === 5) {
        setMessage(`Game Over! The word was ${wordToGuess}.`);
      } else {
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess('');
      }
    }
  };

  const getFeedback = (guess) => {
    let feedback = [];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === wordToGuess[i]) {
        feedback.push('green');
      } else if (wordToGuess.includes(guess[i])) {
        feedback.push('yellow');
      } else {
        feedback.push('gray');
      }
    }
    return feedback;
  };

  const handleRestart = () => {
    setWordToGuess(getRandomWord().toUpperCase());
    setGuesses([]);
    setCurrentGuess('');
    setMessage('');
  };

  return (
    <div className="wordle-container">
      
      <h1>Wordle Game</h1>
      
      <p className="debug-word">Word to Guess: {wordToGuess}</p>

      <div className="guess-section">
        <input
          type="text"
          maxLength={5}
          value={currentGuess}
          onChange={handleInputChange}
          disabled={guesses.length === 6 || message}
          className="guess-input"
        />
        <button onClick={handleSubmit} disabled={guesses.length === 6 || message} className="submit-btn">Submit</button>
      </div>
      {message && <p className="message">{message}</p>}
      <div className="guess-list">
        {guesses.map((guess, index) => (
          <div key={index} className="guess">
            {guess.split('').map((letter, i) => (
              <span key={i} className={`letter ${getFeedback(guess)[i]}`}>{letter}</span>
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleRestart} className="restart-btn">Restart</button>

      <Link to='/dobbel'>Dice Game</Link>
    </div>
  );
};

export default WordleGame;
