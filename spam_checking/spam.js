"use strict";
var button = document.getElementById("button");

function checkSpam() {
    let strings = [];
    let fotos = [];
    const div = document.getElementById('div1');
    const timeright = document.getElementById('time-right');
    let newStr = "";
    let str = document.getElementById("str").value;
    let newstring = str.toString();
    let lowerStr = newstring.toLowerCase();
    let data_user = document.getElementById("user").value;
    let x = lowerStr.replace(/viagra/g,  "***");
    let y = x.replace(/xxx/g,  "***");
    let z = y + '' + '"send by ' + data_user + '"';
    strings.push(z);
    var now = new Date();
    timeright.innerHTML += now.toLocaleTimeString() + '<br>';
    div.innerHTML += strings + '<br>';
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    };
    if (saving.checked) {
        localStorage.setItem(data_user, file);
    }
};

button.addEventListener("click", checkSpam);