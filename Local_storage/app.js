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


//Make the DIV element draggagle:
dragElement(document.getElementsByClassName(("NewNote")));

dragElement.forEach(function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
});