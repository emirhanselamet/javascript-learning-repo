//object literals
// let emirhan = {
//     name:'Emirhan',
//     surname:'Selamet',
//     age:'15'
// }
function Person(name,surname,age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

let emirhan = new Person('Emirhan','selamet',15);
let kerem = new Person('Kerem','selamet',10);

console.log(emirhan.name);
console.log(emirhan.surname);
console.log(emirhan.age);