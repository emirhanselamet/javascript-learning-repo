// object literals

// let yigit = {
//     name:'emirhan',
//     yearOfBirth : 2005,
//     job :'student'
// }

// function Person(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
//     this.calculateAge = function(){
//         return 2021 - this.yearOfBirth;
//     }
// }

let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    this.calculateAge = function(){
        return 2021 - this.yearOfBirth;
    }
}

let emirhan = new Person('emirhan',2005,'student');
let teacher = new Person('teacher',1989,'teacher');

console.log(emirhan.name);
console.log(emirhan.yearOfBirth);
console.log(emirhan.job);
console.log(emirhan.calculateAge());

console.log('***************');

console.log(teacher.name);
console.log(teacher.yearOfBirth);
console.log(teacher.job);
console.log(teacher.calculateAge());