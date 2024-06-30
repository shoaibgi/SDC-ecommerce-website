function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }
  
  function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  }
  

  let originalArray = [1, 2, 3, 4, 5];
  let reversedArray = reverseArray(originalArray.slice()); 
  
  console.log('Original Array:', originalArray);
  console.log('Reversed Array (using reverseArray):', reversedArray);

  reverseArrayInPlace(originalArray);
  console.log('Reversed Array In Place:', originalArray);





