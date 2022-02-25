"use strict";
let button = document.getElementById("button");

function addNewDiv() {
    let container = document.createElement("div");
    container.className = "NewNote";
    container.innerHTML = 'Новая заметка';
    container.id = +new Date();
    document.getElementById('AllNotes').appendChild(container);
    let texting = document.createElement('textarea');
    texting.className = "ForWrite";
    container.appendChild(texting);
    let CloseButton = document.createElement("button");
    CloseButton.className = 'deleteTHis';
    CloseButton.innerHTML = 'Удалить';
    container.appendChild(CloseButton);
};

button.addEventListener('click', addNewDiv);


let delbuttons = document.getElementsByClassName("deleteTHis");
if (delbuttons.length !== 0) {
    delbuttons.forEach(function(item) {
        item.addEventListener("click", function() {
            item.parentNode.parentNode.removeChild(item.parentNode);
        });
    });
};