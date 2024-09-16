// import React, { useEffect, useState } from "react";
// import "./TikTakToe.css";
// function Tiktaktoe() {
//   const [numbers, setnumbers] = useState({
//     one: null,
//     two: null,
//     three: null,
//     four: null,
//     five: null,
//     six: null,
//     seven: null,
//     eight: null,
//     nine: null,
//   });
//   const checkWinner = () => {
//     if (
//       numbers.one != null &&
//       numbers.one === numbers.two &&
//       numbers.two === numbers.three
//     )
//       return [true, numbers.one];
//     if (
//       numbers.one != null &&
//       numbers.one === numbers.four &&
//       numbers.four === numbers.seven
//     )
//       return [true, numbers.one];
//     if (
//       numbers.one != null &&
//       numbers.one === numbers.five &&
//       numbers.five === numbers.nine
//     )
//       return [true, numbers.one];
//     //from 3
//     if (
//       numbers.three != null &&
//       numbers.three === numbers.five &&
//       numbers.five === numbers.seven
//     )
//       return [true, numbers.three];
//     if (
//       numbers.three != null &&
//       numbers.three === numbers.six &&
//       numbers.six === numbers.seven
//     )
//       return [true, numbers.three];
//     //from 2
//     if (
//       numbers.two != null &&
//       numbers.two === numbers.five &&
//       numbers.five === numbers.eight
//     )
//       return [true, numbers.two];
//     if (
//       numbers.two != null &&
//       numbers.four === numbers.five &&
//       numbers.five === numbers.six
//     )
//       return [true, numbers.two];
//     //from 7
//     if (
//       numbers.seven != null &&
//       numbers.seven === numbers.eight &&
//       numbers.eight === numbers.nine
//     )
//       return [true, numbers.seven];
//     return [false, null];
//   };

//   const [valueState, setvalueState] = useState("X");

//   const setValue = (num) => {
//     setnumbers(numbers, (numbers[num] = valueState));
//     if (valueState === "X") {
//       setvalueState("O");
//     } else {
//       setvalueState("X");
//     }
//     const [winningState, winner] = checkWinner();
//     if (winningState) {
//       setTimeout(() => {
//         alert(winner);
//       }, 100);
//     }
//     console.log("checking", winningState, winner);
//   };

//   return (
//     <div className="boxtoe">
//       {Object.keys(numbers).map((num, index) => (
//         <span
//           onClick={() => {
//             setValue(num);
//           }}
//           key={index}
//         >
//           {numbers[num]}
//         </span>
//       ))}
//     </div>
//   );
// }

// export default Tiktaktoe;
