var elems = document.getElementsByClassName('blue');
for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', onRed);
}

function onRed() {
    this.style.backgroundColor = '#f79981'; // при первом срабатывании просто красит в красный
    this.removeEventListener('click', onRed); // при последующи - удаляет саму себя (красный)
    this.addEventListener('click', onGreen); // ...и добавляет другой цвет (зеленый)
}

function onGreen() {
    this.style.backgroundColor = '#a2f781'; // при первом срабатывании просто красит в зеленый
    this.removeEventListener('click', onGreen); // при последующи - удаляет саму себя (зеленый)
    this.addEventListener('click', onRed); // ...и добавляет другой цвет (красный)
}


var elems = document.getElementsByClassName('yellow');
for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', onWhite);
}

function onWhite() {
    this.style.backgroundColor = '#eedfec';
    this.removeEventListener('click', onWhite);
    this.addEventListener('click', onGrey);
}

function onGrey() {
    this.style.backgroundColor = '#9e949d';
    this.removeEventListener('click', onGreen);
    this.addEventListener('click', onWhite);
}

var elems = document.getElementsByClassName('green');
for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', onPink);
}

function onPink() {
    this.style.backgroundColor = '#e929cf';
    this.removeEventListener('click', onPink);
    this.addEventListener('click', onLightblue);
}

function onLightblue() {
    this.style.backgroundColor = '#38eaf7';
    this.removeEventListener('click', onLightblue);
    this.addEventListener('click', onPink);
}

/*4rd div*/

var elems4 = document.getElementsByClassName('red');
for (var i = 0; i < elems.length; i++) {
    elems4[i].addEventListener('click', onYellow);
}

function onYellow() {
    this.style.backgroundColor = '#e6e929';
    this.removeEventListener('click', onYellow);
    this.addEventListener('click', ondarkGreen);
}

function ondarkGreen() {
    this.style.backgroundColor = '#29e939';
    this.removeEventListener('click', ondarkGreen);
    this.addEventListener('click', onYellow);
}