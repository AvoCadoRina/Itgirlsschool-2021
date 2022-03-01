class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return (this.rate * this.days);
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);