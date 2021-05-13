let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function () {
    return 2021 - this.yearOfBirth;
}

let Teacher = function (name,yearOfBirth,job,subject) {
    
    Person.call(this,name,yearOfBirth,job);
    
    this.subject = subject;
}

let Emirhan = new Teacher('emirhan', 2005 ,'developer','web');
Teacher.prototype = Object.create(Person.prototype);
console.log(Teacher.prototype.constructor);
console.log(Emirhan);