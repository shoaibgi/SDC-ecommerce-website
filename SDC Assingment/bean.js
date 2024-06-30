function countBs(str) {
    return countChar(str, 'B');
  }
  
  function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  let resultBs = countBs("BBC");
  console.log(resultBs); // Output: 2
  let resultChar = countChar("kakkerlak", "k");
  console.log(resultChar); // Output: 4