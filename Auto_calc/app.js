function raschitat() {
    let values_all = 0;
    let radios = document.querySelectorAll('input[type="radio"]');
    for (let radio of radios) {
        if (radio.checked) {
            values_all += Number(radio.value);
        }
    }
    price_old = document.getElementById('price_old').value;
    volume = document.getElementById('volume').value;
    volume_cost = volume * 1.2;
    capacity = document.getElementById('capacity').value;
    capacity_cost = capacity * 4;
    if (price_old == "") {
        alert("Вы не указали цену на аукционе");
    } else if (volume == "") {
        alert("Вы не указали объем двигателя");
    } else if (capacity == "") {
        alert("Вы не указали мощность");
    } else {
        stoimost = Number(price_old) + Number(volume_cost) + Number(capacity_cost) + Number(values_all);
        value_fin = Math.ceil(stoimost);
        alert("Стоимость равна: " + value_fin + " $");
    }
}