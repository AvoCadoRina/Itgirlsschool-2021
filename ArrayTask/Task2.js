let arr = [0, 1, false, 2, undefined, '', 3, null];
console.log(JSON.stringify(arr.filter(item => typeof item === "number")));