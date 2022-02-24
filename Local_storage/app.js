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



createSticky = function createSticky(data) {
    data = data || { id: +new Date(), top: "40px", left: "40px", text: "Напиши заметку здесь" }
    return $("<div />", {
            "class": "sticky",
            'id': data.id
        })
        .prepend($("<div />", { "class": "sticky-header" })
            .append($("<span />", {
                "class": "status-sticky",
                click: saveSticky
            }))
            .append($("<span />", {
                "class": "close-sticky",
                text: "Удалить",
                click: function() { deleteSticky($(this).parents(".sticky").attr("id")); }
            }))
        )
        .append($("<div />", {
            html: data.text,
            contentEditable: true,
            "class": "sticky-content",
            keypress: markUnsaved
        }))
        .draggable({
            handle: "div.sticky-header",
            stack: ".sticky",
            start: markUnsaved,
            stop: saveSticky
        })
        .css({
            position: "absolute",
            "top": data.top,
            "left": data.left
        })
        .focusout(saveSticky)
        .appendTo(document.body);
};