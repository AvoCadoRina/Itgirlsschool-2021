var btn = document.querySelector('#btn'),
    price_old = document.querySelector('#price_old').innerHTML = 500;
volume = document.querySelector('#volume').innerHTML = 500;
capacity = document.querySelector('#capacity').innerHTML = 500;

kg = 5.5,
    kub = 3500,
    km = 2;
// range slider
range.onchange = function() {
        var price_old = document.querySelector('#price_old').innerHTML = range.value;
        var volume = document.querySelector('#volume').innerHTML = range.value;
        var capacity = document.querySelector('#capacity').innerHTML = range.value;
    }
    // Basic function  
btn.onclick = function() {
    if (weight.value != '' && vol.value != '') {
        if (load.checked) {
            load.value = 1500;
        } else {
            load.value = 0;
        }
        if (del.checked) {
            del.value = 3500;
        } else {
            del.value = 0;
        }
        if (frag.checked) {
            frag.value = 2000;
        } else {
            frag.value = 0;
        }

        var sum = price_old + (vol.value * kub) + Number(load.value) + +Number(del.value) + Number(frag.value) + (range.value * km);
        out.innerHTML = sum;
    } else {
        alert('Введите все данные');
    }
}