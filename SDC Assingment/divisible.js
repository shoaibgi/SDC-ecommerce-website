for (let i = 1; i <= 100; i++) {
    let output = '';
  
    if (i % 3 === 0) {
      output += 'Fizz';
    }
  
    if (i % 5 === 0) {
      output += 'Buzz';
    }
  
    // If the number is not divisible by 3 or 5, use the number itself
    if (output === '') {
      output = i;
    }
  
    console.log(output);
  }