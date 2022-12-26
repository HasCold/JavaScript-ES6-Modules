import { firstName } from "./utils/Hname.js";
import { age } from "./utils/age.js";
import  Person, {Person2} from "./utils/person.js"; // export default ki wajah se ham {} lagane ki need nahi ha; ak file k liye ak hi default export rahe ga
// We have to write a type="module" at script tag in index.html (don't need to write defer)

console.log(firstName, age);  

const person = new Person2("John", "Mois", 22);   // class contructors must be invoked by new keyword
person.info();
console.log(Person);