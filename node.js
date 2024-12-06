class User {
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(this.name);
    }
}

let user = new User ("John");
user.sayHi();


class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run (speed){
        this.speed = speed;

        console.log(`${this.name} runs with the speed of ${this.speed}.`);
    }
    stop() {
        this.speed= 0;
        console.log(`${this.name} stands still`);
    }
}


class Rabbit extends Animal {
 hide() {
    console.log(`${this.name} hides!`);
 }       
}

let rabbit = new Rabbit ("White Rabbit");
rabbit.run(5);
rabbit.stop();
rabbit.hide();

class Student {
    constructor (name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    study(){
        return `${this.name} is studying`;
    }

    get studentInfo(){
        return `${this.name}, age ${this.age}, grade ${this.grade}`;
    }

    set studentGrade(newGrade) {
        if(newGrade >= 0 && newGrade <= 100){
            this.grade = newGrade;
        } else {
            console.log ('invalid grade');
        }
    }
}

student.studentInfo(james, 50, 50)