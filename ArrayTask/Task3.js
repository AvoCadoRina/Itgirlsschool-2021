let arr = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
];
let x = 0;
for (let i = 0; i < arr.length; i++) {
    var number = arr[i].length;
    if (number === 3) {
        x = i;
        console.log(x);
    }
}