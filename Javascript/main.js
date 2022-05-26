const Person = function (name = prompt("Enter your name"), age = +prompt("Enter your age")) {
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        console.log(this.name, this.age);
    };
};

const Car = function (
    brand = prompt("Type your car brand"),
    color = prompt("Type your car color"),
    mileage = prompt("Type your car mileage")
) {
    this.brand = brand;
    this.color = color;
    this.mileage = mileage;
};
function datareport() {
    const newPerson = new Person();
    const newCar = new Car();
    newCar.name = newPerson.name;
    newCar.age = newPerson.age;
    console.log(newCar);
}
