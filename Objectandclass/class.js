class Person{ // parent class
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
    return `${this.name} is eating`;
    }
    play(){
    return `${this.name} is playing`;
    }
    set changeName(setName){
        this.name = setName;
    }
}

class Cricketer extends Person{ // child class
    constructor(name,age,hobby,type){
        super(name,age);
        this.hobby = hobby;
        this.type = type;
    }
    sleep(){
        return `${this.name} is sleeping`
    }
    get regular(){
        return `${this.name} is regular player`;
    }
    static Meow(){
        console.log("I am a static method");      
    }
    play(){ // polymorphism
        super.play(); // super.method() inherits Parent's method
        return `${this.name} is playing cricket`;
        }
}

let sakib = new Cricketer("sakib",40,"gardening","cricketer");

console.log(sakib.regular); // getter

sakib.changeName = "samrat"; // setter
console.log(sakib.name);

console.log(Cricketer.Meow()); // static method



