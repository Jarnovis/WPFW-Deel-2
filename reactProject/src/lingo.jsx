import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

async function ReadFile() {
    const filePath = '../textFiles/Lingo.txt';

    try {
        let response = await fetch(filePath);

        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }

        let data = await response.text();

        let lines = data.split("\r\n");

        return lines;
    } catch (error) {
        console.error("Error reading file:", error);
        return [];
    }
}

function CheckLetter(id)
{
    if (woord.includes(id.letter))
    {
        if (id.letter === woord.charAt(id.id-1))
        {
            id.check = 1;
        }
        else
        {
            id.check = 0;
        }
    }
    else
    {
        id.check = -1;
    }
}

function SetPlacement()
{

}


// create and show dices
function Woord() {
    const [woord, setWoord] = useState('');
    const [letters, setLetter] = useState([
        { id: 1, letter: "", check: -1 },
        { id: 2, letter: "", check: -1 },
        { id: 3, letter: "", check: -1 },
        { id: 4, letter: "", check: -1 },
        { id: 5, letter: "", check: -1 }
    ]);
    const [alfabet] = useState([
        { id : 1, letter: "Q" },
        { id : 2, letter: "W" },
        { id : 3, letter: "E" },
        { id : 4, letter: "R" },
        { id : 5, letter: "T" },
        { id : 6, letter: "Y" },
        { id : 7, letter: "U" },
        { id : 8, letter: "I" },
        { id : 9, letter: "O" },
        { id : 10, letter: "P" },
        { id : 11, letter: "A" },
        { id : 12, letter: "S" },
        { id : 13, letter: "D" },
        { id : 14, letter: "F" },
        { id : 15, letter: "G" },
        { id : 16, letter: "H" },
        { id : 17, letter: "J" },
        { id : 18, letter: "K" },
        { id : 19, letter: "L" },
        { id : 20, letter: "Z" },
        { id : 21, letter: "X" },
        { id : 22, letter: "C" },
        { id : 23, letter: "V" },
        { id : 24, letter: "B" },
        { id : 25, letter: "N" },
        { id : 26, letter: "M" }
    ]);

    useEffect(() => {
        async function fetchWoord() {
            const woorden = await ReadFile();
            if (woorden.length > 0) {
                setWoord(woorden[Math.floor(Math.random() * woorden.length)]);
                console.log(woord);
            }
        }
        fetchWoord();
    }, []); // Empty dependency array to run once on mount

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
            <h1>Lingo</h1>
            <div className="letter">
                <button id="send" onClick={() => letters.map((letter) => CheckLetter(letter))}>Commit</button>
            </div>

            <div className="alphabet-buttons">
                {alfabet.map((letter) => (
                    <button key={letter.id} onClick={() => {
                        // Handle letter selection logic here
                        const updatedLetters = [...letters];
                        const letterIndex = updatedLetters.findIndex(l => l.id === letter.id);
                        if (letterIndex !== -1) {
                            updatedLetters[letterIndex].letter = letter.letter; // Set selected letter
                            setLetter(updatedLetters); // Update state
                        }
                    }}>
                        {letter.letter}
                    </button>
                ))}
            </div>

            <div className="roaster">
            </div>
            <p>Selected word: {woord}</p>
            <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>


        </>
    );
}

export default Woord;
