import { useState } from "react"
import Board from "./Board";

const Game = () => {

  const [history, setHistory] = useState([Array(9).fill(" ")]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  const jumpTo = (move: number) => {
    setCurrentMove(move);
  }

  const moves = history.map((_squares, move) => {
    const description = (move > 0) ? 'Go to move # ' + move : 'Go to game start';

    return (
        <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
    )
  })

  return (
    <div>
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-history">
            <ol>
                {moves}
            </ol>
        </div>
    </div>
  )
}

export default Game
