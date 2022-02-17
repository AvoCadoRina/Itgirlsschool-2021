function alerted() {
    n1 = document.getElementById('name');
    n2 = document.getElementById('surname');
    n3 = document.getElementById('username');
    n4 = document.getElementById('email');
    n5 = document.getElementById('password');
    n6 = document.getElementById('passwordRepeat');

    if (n1.value == '' && n2.value == '' && n3.value == '' && n4.value == '' && n5.value == '' && n6.value == '') {
        alert("Заполните поля, выделенные красным");
    } else if (n1.value == '' | n2.value == '' | n3.value == '' | n4.value == '' | n5.value == '' | n6.value == '') {
        alert("Заполните поля, выделенные красным");
    }

    n1 = document.getElementById('name');
    if (n1.value == "") {
        n1.style.backgroundColor = "red";
    } else {
        n1.style.backgroundColor = "white";
    }

    n2 = document.getElementById('surname');
    if (n2.value == "") {
        n2.style.backgroundColor = 'red';
    } else {
        n2.style.backgroundColor = "white";
    }

    n3 = document.getElementById('username');
    if (n3.value == "") {
        n3.style.backgroundColor = 'red';
    } else {
        n3.style.backgroundColor = "white";
    }
    n4 = document.getElementById('email');
    if (n4.value == "") {
        n4.style.backgroundColor = 'red';
    } else {
        n4.style.backgroundColor = "white";
    }
    n5 = document.getElementById('password');
    if (n5.value == "") {
        n5.style.backgroundColor = 'red';
    } else {
        n5.style.backgroundColor = "white";
    }
    n6 = document.getElementById('passwordRepeat');
    if (n6.value == "") {
        n6.style.backgroundColor = 'red';
    } else {
        n6.style.backgroundColor = "white";
    }
};