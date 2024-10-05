function Person(name,age){ // Parent
    this.name = name;
    this.age = age;
}

Person.prototype.eat = function(){
    return `${this.name} is eating`;
}
Person.prototype.play = function(){
    return `${this.name} is playing`;
}

Person.staticMethod = function(){ // static method
    console.log("I am static method");    
}

// Person.staticMethod(); 

// Person.prototype = {
//     eat(){},
//     play(){}
// }


function Cricketer(name,age,hobby,type){ // Child
    Person.call(this,name,age);
    this.hobby = hobby;
    this.type = type;
    this.sleep = function(){
        return `${this.name} is sleeping`
    }
}

// It will inherit the Person's prototype and change the constructor of newly created object
Cricketer.prototype = Object.create(Person.prototype);

// It will make the constructor right again
Cricketer.prototype.constructor = Cricketer;

let sakib = new Cricketer("sakib",40,"gardening","cricketer");

console.dir(sakib);


Object.defineProperty(sakib,"regular",{
    get: function(){
        return `${this.name} is regular player`;
    }
});

Object.defineProperty(sakib,"changeName",{
    set: function(setName){
        this.name = setName;
    }
});


// Object.defineProperty(obj,property,descriptor). Here descriptor is for defining properties of property as well as setting getter and setter.
// getter and setter have simpler syntax bcz they are computed properties meaning they compute themselves in runtime and makes an ready made property. Hence, it has simpler syntax and can be accessed as regular property and should not be called as regular method.

console.log(sakib.changeName);

// let obj = Object.create(null);
// console.dir(obj);

// describe how the prototype inheritence end up to null and Object creation process.
