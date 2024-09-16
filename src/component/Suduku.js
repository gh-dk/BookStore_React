// import React, { useState, useEffect } from "react";

// function Sudoku() {
//   const initialGrid = [
//     [3, 0, 6, 5, 7, 8, 4, 9, 0],
//     [5, 2, 0, 0, 0, 0, 0, 0, 0],
//     [0, 8, 7, 0, 0, 0, 0, 3, 1],
//     [0, 0, 3, 0, 1, 0, 0, 8, 0],
//     [9, 0, 0, 8, 6, 3, 0, 0, 5],
//     [0, 5, 0, 0, 9, 0, 6, 0, 0],
//     [1, 3, 0, 0, 0, 0, 2, 5, 0],
//     [0, 0, 0, 0, 0, 0, 0, 7, 4],
//     [0, 0, 5, 2, 0, 6, 3, 0, 0],
//   ];

//   const delayTime = 100;

//   const [grid, setGrid] = useState(initialGrid);
//   const [solved, setSolved] = useState(false);

//   function isValid(grid, row, col, num) {
//     for (let i = 0; i < 9; i++) {
//       if (grid[row][i] === num || grid[i][col] === num) return false;
//     }

//     let startRow = 3 * Math.floor(row / 3);
//     let startCol = 3 * Math.floor(col / 3);

//     for (let i = startRow; i < startRow + 3; i++) {
//       for (let j = startCol; j < startCol + 3; j++) {
//         if (grid[i][j] === num) return false;
//       }
//     }

//     return true;
//   }

//   async function solveSudoku(newGrid, row, col) {
//     if (row === 9) {
//       setSolved(true);
//       return true;
//     }

//     if (col === 9) {
//       return solveSudoku(newGrid, row + 1, 0);
//     }

//     if (newGrid[row][col] !== 0) {
//       return solveSudoku(newGrid, row, col + 1);
//     }

//     for (let num = 1; num <= 9; num++) {
//       if (isValid(newGrid, row, col, num)) {
//         newGrid[row][col] = num;
//         setGrid([...newGrid]);

//         await new Promise((resolve) => setTimeout(resolve, delayTime));

//         if (await solveSudoku(newGrid, row, col + 1)) {
//           return true;
//         }

//         newGrid[row][col] = 0;
//         setGrid([...newGrid]);

//         await new Promise((resolve) => setTimeout(resolve, delayTime));
//       }
//     }

//     return false;
//   }

//   useEffect(() => {
//     const newGrid = JSON.parse(JSON.stringify(grid));
//     solveSudoku(newGrid, 0, 0);
//   }, []);

//   return (
//     <div>
//       <h2>Sudoku Solver</h2>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(9, 50px)",
//           gap: "5px",
//         }}
//       >
//         {grid.map((row, rowIndex) =>
//           row.map((cell, colIndex) => (
//             <div
//               key={`${rowIndex}-${colIndex}`}
//               style={{
//                 width: "50px",
//                 height: "50px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 border: "1px solid black",
//                 backgroundColor: cell === 0 ? "lightgray" : "white",
//                 color: cell !== 0 ? "black" : "gray",
//               }}
//             >
//               {cell !== 0 ? cell : ""}
//             </div>
//           ))
//         )}
//       </div>
//       {solved && <h3>Sudoku Solved!</h3>}
//     </div>
//   );
// }

// export default Sudoku;
