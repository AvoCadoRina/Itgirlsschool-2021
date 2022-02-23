"use strict";
let button = document.getElementById("button");

function alerted() {
    let userName = document.getElementById('name');
    let userSurname = document.getElementById('surname');
    let userUserName = document.getElementById('username');
    let userEmail = document.getElementById('email');
    let userPassword = document.getElementById('password');
    let userPasswordRepeat = document.getElementById('passwordRepeat');
    let alldata = []
    if (userName.value == '' && userSurname.value == '' && userUserName.value == '' && userEmail.value == '' && userPassword.value == '' && userPasswordRepeat.value == '') {
        alert("Заполните поля, выделенные красным");
    } else if (userName.value == '' | userSurname.value == '' | userUserName.value == '' | userEmail.value == '' | userPassword.value == '' | userPasswordRepeat.value == '') {
        alert("Заполните поля, выделенные красным");
    };
    alldata = [userName, userSurname, userUserName, userEmail, userPassword, userPasswordRepeat];
    for (let i = 0; i < alldata.length; i++) {
        if (alldata[i].value == '') {
            alldata[i].style.backgroundColor = "red";
        } else {
            alldata[i].style.backgroundColor = "white";
        };
    };
}

function validation() {
    let Password = document.getElementById('password');
    let PasswordRepeat = document.getElementById('passwordRepeat');
    let Password_str = Password.value;
    let NameOfUser = document.getElementById('name');
    let NameOfUser_str = NameOfUser.value;
    let SurnameOfUser = document.getElementById('surname');
    let SurnameOfUser_str = SurnameOfUser.value;
    let EmailOfUser = document.getElementById('email');
    let EmailOfUser_str = EmailOfUser.value;
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    let surname = /^[A-ZА-яa-zа-я]+$/;
    let email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (Password.value != PasswordRepeat.value) {
        alert("Passwords doesnot match!");
    } else if (!Password_str.match(passw)) {
        alert('Password rules: 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter');
    } else if (!NameOfUser_str.match(surname) || !SurnameOfUser_str.match(surname)) {
        alert('Name and surname must have alphabetcharactersonly')
    } else if (!EmailOfUser_str.match(email)) {
        alert('You have entered an invalid email address!')
    } else {
        let tag_name = document.getElementById('username');
        const name = tag_name.value;
        document.querySelector('#Tell').innerHTML = `<b>${name}</b>, добро пожаловать в CatsTube!`;
    }
}

button.addEventListener('click', () => {
    alerted();
    validation();
});