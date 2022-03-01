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



class Cat {
    constructor(surname, contacts, petname, poroda, food, comment, sex) {
        this.surname = surname;
        this.contacts = contacts;
        this.petname = petname;
        this.poroda = poroda;
        this.food = food;
        this.comment = comment;
        this.sex = sex;
    }
    CatData() {
        alert(`Владелец ${this.surname} Контакты ${this.contacts} Комментарий ${this.comment} Имя питомца ${this.petname} пол ${this.sex} порода ${this.poroda} предпочитаемая еда: ${this.food}`);
    }
};

function ShowData() {
    var userSurname = document.getElementById('surname').value;
    var userContacts = document.getElementById('contacts').value;
    var UserPetname = document.getElementById('name').value;
    var Porodanew = document.getElementById("poroda");
    var PetPoroda = Porodanew.options[Porodanew.selectedIndex].text;
    var PetFood = document.querySelectorAll('input.checkbox:checked').value;
    var UserComment = document.getElementById('UserComment').value;
    var Petsex = document.querySelector('input[name="sex"]:checked').value;
    var all_checkbox = document.getElementsByName("food");
    var PetFood = "";
    for (var i = 0; i < all_checkbox.length; i++) {
        if (all_checkbox[i].checked) { PetFood += all_checkbox[i].value + " "; }
    };
    let Cat1 = new Cat(userSurname, userContacts, UserPetname, PetPoroda, PetFood, UserComment, Petsex);
    Cat1.CatData();
};



button.addEventListener('click', () => {
    checkOrNot();
    ShowData();
});