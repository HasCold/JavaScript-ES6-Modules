// A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword.

// The purpose of a constructor is to create a new object and set values for any existing object properties.
export default class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    info(){
        console.log(this.firstname, this.lastname, this.age);
    }
}

export class Person2{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    info(){
        console.log(this.firstname, this.lastname, this.age);
    }
}
const hello = "Hello World";
// export default hello;