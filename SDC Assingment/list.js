
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }
    return list;
  }
  function listToArray(list) {
    let array = [];
    while (list !== null) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
  }
  function prepend(element, list) {
    return { value: element, rest: list };
  }

  function nth(list, position) {
    if (list === null) {
      return undefined; // Position not found
    } else if (position === 0) {
      return list.value;
    } else {
      return nth(list.rest, position - 1);
    }
  }

  function recursiveNth(list, position) {
    if (list === null) {
      return undefined; // Position not found
    } else if (position === 0) {
      return list.value;
    } else {
      return recursiveNth(list.rest, position - 1);
    }
  }
  
  // Test cases
  console.log(arrayToList([10, 20]));
  // Output: { value: 10, rest: { value: 20, rest: null } }
  
  console.log(listToArray(arrayToList([10, 20, 30])));
  // Output: [10, 20, 30]
  
  console.log(prepend(10, prepend(20, null)));
  // Output: { value: 10, rest: { value: 20, rest: null } }
  
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // Output: 20
  