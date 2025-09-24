// Count Occurrences of Each Character
// Input: "banana" → Output: { b: 1, a: 3, n: 2 }

function countChars(str) {
  return [...str].reduce((map, char) => {
    map[char] = (map[char] || 0) + 1;
    return map;
  }, {});
}

console.log(countChars("banana")); 

