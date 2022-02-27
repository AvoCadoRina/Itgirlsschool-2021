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
    let SaveButton = document.createElement("button");
    SaveButton.className = 'SaveThis';
    SaveButton.innerHTML = 'Сохранить';
    container.appendChild(SaveButton);
    let CloseButton = document.createElement("button");
    CloseButton.className = 'deleteTHis';
    CloseButton.innerHTML = 'Удалить';
    container.appendChild(CloseButton);
    localStorage.setItem(container.id, $(container).html());
};

button.addEventListener('click', addNewDiv);


let delbuttons = document.getElementsByClassName(".deleteTHis");
for (let i = 0; delbuttons.length; i++) {
    delbuttons[i].addEventListener("click", function() {
        item.remove();
    });
};

$(function DragNote() {
    $(".NewNote").draggable();
});

let savebuttons = document.getElementsByClassName(".SaveThis");
for (let i = 0; savebuttons.length; i++) {
    savebuttons[i].addEventListener("click", function SaveNote() {
        let id = $(this).parents('.NewNote').attr('id');
        let div = document.getElementById(id);
        obj = {
            id: div.attr("id"),
            top: div.css("top"),
            left: div.css("left"),
            text: div.children(".ForWrite").html()
        };
        localStorage.setItem("Note-" + obj.id, JSON.stringify(obj));
    });
};