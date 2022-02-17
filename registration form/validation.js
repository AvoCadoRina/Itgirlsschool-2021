function validation() {
    a1 = document.getElementById('password');
    a2 = document.getElementById('passwordRepeat');
    a3 = a1.value;
    a4 = document.getElementById('name');
    a5 = a4.value;
    a6 = document.getElementById('surname');
    a7 = a6.value;
    a8 = document.getElementById('email');
    a9 = a8.value;
    passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    surname = /^[A-ZА-яa-zа-я]+$/;
    email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (a1.value != a2.value) {
        alert("Passwords doesnot match!");
    } else if (!a3.match(passw)) {
        alert('Password rules: 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter');
    } else if (!a5.match(surname) || !a7.match(surname)) {
        alert('Name and surname must have alphabetcharactersonly')
    } else if (!a9.match(email)) {
        alert('You have entered an invalid email address!')
    } else {
        let tag_name = document.getElementById('username');
        const name = tag_name.value;
        document.querySelector('#Tell').innerHTML = `<b>${name}</b>, добро пожаловать в CatsTube!`;
    }
}