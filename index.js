class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`);
    }
}
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    introduce() {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет, и я ${this.position}.`);
    }
}

const person1 = new Person('Джон', 25);
const person2 = new Person('Джеймс', 30);

person1.greet();
person2.greet();

const employee1 = new Employee('Карл', 40, 'Разработчик');
const employee2 = new Employee('Стетхам', 35, 'Менеджер');


employee1.introduce();
employee2.introduce();

