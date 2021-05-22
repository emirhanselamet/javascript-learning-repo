//person constructor
function Person(name) {
    this.name = name;
}
Person.prototype.Introduce = function () {
    console.log('hello my name is ' + this.name);
}

//teacher constuructor
function Teacher(name,branc) {
    Person.call(this,name);
    this.branch = branch;
}
//kopyalama işlemi
Teacher.prototype  = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function () {
    console.log('I teach' + this.branch);
}

//student consturucotr
function Student(name,number) {
    Person.call(this,name);
    this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function () {
    console.log('my student number is ' + this.number);
}

//headmaster contsturactor

function headmaster(name,branch) {
    Teacher.call(this,name,branch);
}

headmaster.prototype = Object.create(Teacher.prototype);
headmaster.prototype.constructor = headmaster;
headmaster.prototype.shareTask = function () {
    console.log('helal');
}


let p1 = new Person('emihran');
p1.Introduce();
let t1 = new Teacher('kerem','dev');
t1.Introduce();
t1.teach();

let s1 = new Student('emirhan');
s1.Introduce();
s1.study();

let h1 = new headmaster('ahmet','math');
h1.Introduce();