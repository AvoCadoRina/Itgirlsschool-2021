"use strict";
var results = [];
for (var i = 0; i < 10; i++) {
    var random = Math.floor((Math.random() * 20) - 10);
    results.push(random);
}
let numbers = results.join();
let max = Math.max(...results);
let min = Math.min(...results);
let sum = 0;

function averageСost(arr) {
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
let average = averageСost(results);
let multiply = results.reduce((acc, rec) => acc * rec);

alert(`Массив: ${(results)}`);
alert(`Максимальное: ${(max)}`);
alert(`Минимальное: ${(min)}`);
alert(`Среднее арифметическое: ${(average)}`);
alert(`Сумма: ${(sum)}`);
alert(`Произведение: ${(multiply)}`);