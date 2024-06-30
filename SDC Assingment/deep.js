function deepEqual(a, b) {

    if (a === b) {
      return true;
    }
  
    if (typeof a === 'object' && a !== null &&
        typeof b === 'object' && b !== null) {
      

      let keysA = Object.keys(a);
      let keysB = Object.keys(b);
  
      
      if (keysA.length !== keysB.length) {
        return false;
      }
  
     
      for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
          return false;
        }
      }
  
      return true; 
    }
  
    return false; 
  }
  
  // Test cases
  let obj = { here: { is: "an" }, object: 2 };
  
  console.log(deepEqual(obj, obj));
  // Output: true
  
  console.log(deepEqual(obj, { here: 1, object: 2 }));
  // Output: false
  
  console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
  // Output: true
  