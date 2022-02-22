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
    fathername_upper = fathername.toUpperCase();
    fathername_fin = fathername_upper[0] + fathername.slice(1)
    surname_upper = surname.toUpperCase();
    surname_fin = surname_upper[0] + surname.slice(1)
    firstname_upper = firstname.toUpperCase();
    firstname_fin = firstname_upper[0] + firstname.slice(1)
    finalValue += surname_fin + '\n' + 'Имя' + firstname_fin + '\n Отчество:' + fathername_fin;
    document.getElementById('newdata').innerHTML = finalValue;
};

button.addEventListener("click", addNameSurnameFathername);