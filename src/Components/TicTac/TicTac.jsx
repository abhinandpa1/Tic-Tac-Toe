import React, { useState, useRef, useEffect } from 'react';
import './TicTac.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';
import backgroundMusic from '../Assets/BombSquad.mp3'; // Add your music file path here

function TicTac() {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [winner, setWinner] = useState(null);
    const audioRef = useRef(null);

    const toggle = (index) => {
        if (lock || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = count % 2 === 0 ? "x" : "o";
        setBoard(newBoard);
        setCount(count + 1);

        checkWin(newBoard);
    };

    const checkWin = (currentBoard) => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]            // Diagonals
        ];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                setLock(true);
                setWinner(currentBoard[a]);
                return;
            }
        }
    };

    const reset = () => {
        setBoard(Array(9).fill(""));
        setCount(0);
        setLock(false);
        setWinner(null);
    };

    useEffect(() => {
        // Automatically play the music when the component loads
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.warn('Audio playback may be blocked until user interacts:', error);
            });
            audioRef.current.loop = true; // Ensures the music loops
        }
    }, []);

    return (
        <div>
            <div className="container">
                <h1 className="title">
                    {winner ? `Congratulations! Winner is: ` : "Tic Tac Toe Game"}
                    {winner && <img src={winner === "x" ? cross_icon : circle_icon} alt={winner} />}
                </h1>
                
                <div className="board">
                    {board.map((value, index) => (
                        <div
                            key={index}
                            className="boxes"
                            onClick={() => toggle(index)}
                        >
                            {value && (
                                <img
                                    src={value === "x" ? cross_icon : circle_icon}
                                    alt={value}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <button className="reset" onClick={reset}>Reset</button>
            </div>

            {/* Background Music */}
            <audio ref={audioRef} loop>
                <source src={backgroundMusic} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default TicTac;





