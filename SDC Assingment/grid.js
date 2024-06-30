let size = 8;
let chessboard = '';

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    
    if ((row + col) % 2 === 0) {
      chessboard += ' ';
    } else {
      chessboard += '#';
    }
  }
  chessboard += '\n'; 
}

console.log(chessboard);