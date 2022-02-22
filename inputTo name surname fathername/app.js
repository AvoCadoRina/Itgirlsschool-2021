"use strict";
var button = document.getElementById("button");

function addNameSurnameFathername() {

    let surname = '';
    let firstname = '';
    let fathername = '';
    let str = document.getElementById("str").value;
    let newstring = str.toString();
    let finalValue = 'Фамилия:';
    let sliced_data = newstring.split(" ");
    surname = sliced_data[0];
    firstname = sliced_data[1];
    fathername = sliced_data[2];
    surname = surname.toLowerCase();
    firstname = firstname.toLowerCase();
    fathername = fathername.toLowerCase();
    for (;;) {
        var FirstLetterUppercase = function(str) {
            let fullstr = str.toUpperCase();
            let finalstr = fullstr[0] + str.slice(1);
            return finalstr;
        };
    };

    finalValue += surname.FirstLetterUppercase();
    finalValue += '\n Имя:';
    finalValue += firstname.FirstLetterUppercase();
    finalValue += '\n Отчество:';
    finalValue += fathername.FirstLetterUppercase();
    document.getElementById('newdata').innerHTML = finalValue;
};

button.addEventListener("click", addNameSurnameFathername);