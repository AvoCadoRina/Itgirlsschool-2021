function addNameSurnameFathername() {

    let surname = '';
    let firstname = '';
    let fathername = '';
    let str = document.getElementById("str").value;
    let newstring = str.toString();
    const re = newstring.split(" ");
    surname = re[0];
    firstname = re[1];
    fathername = re[2];
    surname = surname.toLowerCase();
    firstname = firstname.toLowerCase();
    fathername = fathername.toLowerCase();

    String.prototype.firstLetterToUppercase = function() {
        return this[0].toUpperCase() + this.slice(1);
    }

    let finalValue = 'Фамилия:';
    finalValue += surname.firstLetterToUppercase();
    finalValue += '\n Имя:';
    finalValue += firstname.firstLetterToUppercase();
    finalValue += '\n Отчество:';
    finalValue += fathername.firstLetterToUppercase();
    document.getElementById('newdata').innerHTML = finalValue;
}