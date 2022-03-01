let email = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
let number = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
let domain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
let data = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;



class ValidatorStatic {

    static isPhone(x) {
        let rightFormatPhone = false;
        if (x.match(number)) {
            rightFormatPhone = true;
        }
        return rightFormatPhone;
    }
    static isEmail(z) {
        let rightFormatEmail = false;
        if (z.match(email)) {
            rightFormatEmail = true;
        }
        return rightFormatEmail;
    }
    static isDate(y) {
        let rightFormatDate = false;
        if (y.match(data)) {
            rightFormatDate = true;
        }
        return rightFormatDate;
    }
    static isDomain(v) {
        let rightFormat = false;
        if (v.match(domain)) {
            rightFormat = true;
        }
        return rightFormat;
    }

}

console.log(ValidatorStatic.isEmail('alisa@mail..ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(l910)123-45-67'));