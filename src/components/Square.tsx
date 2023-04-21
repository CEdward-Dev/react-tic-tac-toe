import { MouseEventHandler } from "react"

const Square = ({value, onSquareClick}: {value:string, onSquareClick: MouseEventHandler}) => {
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  )
}

export default Square