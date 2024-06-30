function range(start, end, step = 1) {
    let result = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }
    return result;
  }
  
  function sum(numbers) {
    return numbers.reduce((total, current) => total + current, 0);
  }
  
  let exampleRange = range(1, 10); 
  let exampleSum = sum(exampleRange);
  
  console.log(exampleRange); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(exampleSum);   // Output: 55
  let bonusRange1 = range(1, 10, 2); // Step is 2
  let bonusRange2 = range(5, 2, -1); // Step is -1
  
  console.log(bonusRange1); // Output: [1, 3, 5, 7, 9]
  console.log(bonusRange2); // Output: [5, 4, 3, 2]