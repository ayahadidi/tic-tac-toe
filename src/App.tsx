// cartoon site

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartoonDetail from "./pages/CartoonDetail";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartoon/:id" element={<CartoonDetail />} />
      </Routes>
    </>
  );
}
export default App;

// import { useState, useEffect } from "react";
// import Board from "./components/Board";
// import "./App.css";

// function App() {
//   const [size, setSize] = useState(3);
//   const [matrix, setMatrix] = useState(Array(9).fill(""));
//   const [letter, setLetter] = useState<"X" | "O">("X");
//   const [winner, setWinner] = useState("");
//   const [gameOver, setGameOver] = useState(false);

//   useEffect(() => {
//     setMatrix(Array(size * size).fill(""));
//     setLetter("X");
//     setWinner("");
//     setGameOver(false);
//   }, [size]);

//   function move(index: number) {
//     if (matrix[index] !== "" || gameOver) return;

//     const newMatrix = [...matrix];
//     newMatrix[index] = letter;
//     setMatrix(newMatrix);

//     if (checkWinner(newMatrix)) {
//       setWinner(`Player ${letter === "X" ? "1" : "2"} wins!`);
//       setGameOver(true);
//     } else if (newMatrix.every((cell) => cell !== "")) {
//       setWinner("Draw!");
//       setGameOver(true);
//     } else {
//       setLetter(letter === "X" ? "O" : "X");
//     }
//   }

//   function checkWinner(board: string[]) {
//     for (let row = 0; row < size; row++) {
//       const start = row * size;
//       if (
//         board[start] &&
//         board.slice(start, start + size).every((val) => val === board[start])
//       ) {
//         return true;
//       }
//     }

//     for (let col = 0; col < size; col++) {
//       const first = board[col];
//       if (
//         first &&
//         Array.from({ length: size }, (_, i) => board[col + i * size]).every(
//           (val) => val === first
//         )
//       ) {
//         return true;
//       }
//     }

//     const mainDiagonal = Array.from(
//       { length: size },
//       (_, i) => board[i * (size + 1)]
//     );
//     if (
//       mainDiagonal[0] &&
//       mainDiagonal.every((val) => val === mainDiagonal[0])
//     ) {
//       return true;
//     }

//     const antiDiagonal = Array.from(
//       { length: size },
//       (_, i) => board[(i + 1) * (size - 1)]
//     );
//     if (
//       antiDiagonal[0] &&
//       antiDiagonal.every((val) => val === antiDiagonal[0])
//     ) {
//       return true;
//     }

//     return false;
//   }

//   function reset() {
//     setMatrix(Array(size * size).fill(""));
//     setLetter("X");
//     setWinner("");
//     setGameOver(false);
//   }

//   return (
//     <div className="game">
//       <h1>Tic Tac Toe</h1>

//       <label>Pick board size (3 to 5): </label>
//       <input
//         type="number"
//         min={1}
//         max={7}
//         value={size}
//         onChange={(e) => {
//           const inputValue = Number(e.target.value);
//           const newSize = Math.max(1, Math.min(5, inputValue));
//           setSize(newSize);
//         }}
//       />

//       <Board matrix={matrix} move={move} size={size} />

//       <div className="message">{winner}</div>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default App;
