let email = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
let number = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
let domain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
let data = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;



class Validator {

    isPhone(str) {
        let rightFormat = false;
        if (str.match(number)) {
            rightFormat = true;
        }
        return rightFormat;
    }
    isEmail(str) {
        let rightFormat = false;
        if (str.match(email)) {
            rightFormat = true;
        }
        return rightFormat;
    }
    isDate(str) {
        let rightFormat = false;
        if (str.match(data)) {
            rightFormat = true;
        }
        return rightFormat;
    }
    isDomain(str) {
        let rightFormat = false;
        if (str.match(domain)) {
            rightFormat = true;
        }
        return rightFormat;
    }

}
var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));