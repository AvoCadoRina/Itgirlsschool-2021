let SumBut = document.getElementById("SumBut");
let DiffBut = document.getElementById("DiffBut");
let MultBut = document.getElementById("MultBut");
let DivBut = document.getElementById("DivBut");

function sum() {
    let first_number = document.querySelector('.first_number');
    const numb1 = first_number.value;
    let second_number = document.querySelector('.second_number');
    const numb2 = second_number.value;
    let newPair = new Calculator(numb1, numb2);
    document.getElementById("Sum").innerHTML = Calculator.sumfunc(newPair);
}

function diff() {
    let first_number = document.querySelector('.first_number');
    const numb1 = first_number.value;
    let second_number = document.querySelector('.second_number');
    const numb2 = second_number.value;
    let newPair = new Calculator(numb1, numb2);
    document.getElementById("Diff").innerHTML = Calculator.diffunc(newPair);
}

function mult() {
    let first_number = document.querySelector('.first_number');
    const numb1 = first_number.value;
    let second_number = document.querySelector('.second_number');
    const numb2 = second_number.value;
    let newPair = new Calculator(numb1, numb2);
    document.getElementById("Mult").innerHTML = Calculator.mulfunc(newPair);
}

function div() {
    let first_number = document.querySelector('.first_number');
    const numb1 = first_number.value;
    let second_number = document.querySelector('.second_number');
    const numb2 = second_number.value;
    let newPair = new Calculator(numb1, numb2);
    document.getElementById("Div").innerHTML = Calculator.divfunc(newPair);
}


class Calculator {
    constructor(numb1, numb2) {
        this.numb1 = numb1;
        this.numb2 = numb2;
    }
    static divfunc(x) {
        if (x.numb2 == 0) {
            return "На ноль делить нельзя!";
        } else {
            return "Частное = " + (Number(x.numb1) / Number(x.numb2));
        }
    }
    static sumfunc(p) {
        return "Сумма = " + (Number(p.numb1) + Number(p.numb2));
    }
    static diffunc(y) {
        return "Разность = " + (Number(y.numb1) - Number(y.numb2));
    }
    static mulfunc(z) {
        return "Произведение = " + (Number(z.numb1) * Number(z.numb2));
    }
}

SumBut.addEventListener('click', sum);
DiffBut.addEventListener('click', diff);
MultBut.addEventListener('click', mult);
DivBut.addEventListener('click', div);