import { useState } from 'react'
import Square from './components/Square'
import './App.css'

export const Board = () => {
  const [isNextX, SetIsNextX] = useState(false)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const calculateWinner = (squares: string[] | null[]) => {
      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
      ];

      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
          }
      }
      return null;
  }

  let status = ""
  const winner = calculateWinner(squares)

    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (isNextX ? "X" : "O");
    }

  const onSquareClick = (i: number) => {
      if (squares[i] || calculateWinner(squares)) return 
      const nextSquares = squares.slice()

      isNextX ? nextSquares[i] = 'X' : nextSquares[i] = 'O'
      setSquares(nextSquares)

      SetIsNextX(!isNextX)
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => onSquareClick(1)}  />
        <Square value={squares[2]} onSquareClick={() => onSquareClick(2)}  />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => onSquareClick(3)}  />
        <Square value={squares[4]} onSquareClick={() => onSquareClick(4)}  />
        <Square value={squares[5]} onSquareClick={() => onSquareClick(5)}  />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => onSquareClick(6)}  />
        <Square value={squares[7]} onSquareClick={() => onSquareClick(7)}  />
        <Square value={squares[8]} onSquareClick={() => onSquareClick(8)}  />
      </div>
    </>
  )
}

export default Board
