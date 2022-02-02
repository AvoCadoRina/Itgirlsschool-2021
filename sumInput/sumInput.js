function sumInput() {

    let all_numbers = [];
    let sum = 0;
    for (;;) {
        let value = prompt("Введите число", 0);
        if (value === "" || value === null || !isFinite(value))
            break;
        all_numbers.push(+value);
    }
    for (let number of all_numbers) {
        sum += number;
    }
    return sum;
}
alert(sumInput());