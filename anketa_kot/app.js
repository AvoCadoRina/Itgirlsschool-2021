"use strict";
let button = document.getElementById("button");
let allboxes = document.getElementsByName("food");

function checkOrNot() {
    let NumberChecked = 0;
    for (let i = 0; i < allboxes.length; i++) {
        if (allboxes[i].checked)
            NumberChecked++;
    };
    if (NumberChecked == 0) {
        button.setAttribute('disabled', 'true');
        alert('Выберите хотя бы 1 вид предпочитаемого корма');
    } else {
        button.removeAttribute('disabled');
    };
}
button.addEventListener('click', checkOrNot);