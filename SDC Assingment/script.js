
const SCRIPTS = [
    {
      name: "Latin",
      ranges: [[0x0000, 0x007F], [0x0080, 0x00FF], ],
      direction: "ltr"
    },
    {
      name: "Arabic",
      ranges: [[0x0600, 0x06FF], [0x0750, 0x077F], ],
      direction: "rtl"
    },
   
  ];

  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => code >= from && code < to)) {
        return script;
      }
    }
    return null;
  }
  
  // Function to count the number of elements with a specific value in an array
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name === name);
      if (known === -1) {
        counts.push({ name, count: 1 });
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  // Function to get the script count for each character in the text
  function characterScriptCount(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({ name }) => name !== "none");
  
    return scripts;
  }
  
  // Function to find the dominant direction in a text
  function dominantDirection(text) {
    let scriptCounts = characterScriptCount(text);
  
    if (scriptCounts.length === 0) {
      return "ltr"; // Default direction if no script is found
    }
  
    return scriptCounts.reduce((a, b) => (a.count > b.count ? a : b)).name;
  }
  
  // Example usage
  console.log(dominantDirection("Hello!"));
  // Output: ltr
  
  console.log(dominantDirection("Hey, مساء الخير"));
