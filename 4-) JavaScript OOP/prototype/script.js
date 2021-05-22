//Prototype

let Person = function(name,birthday,job) { 
    this.name = name;
    this.birthday = birthday;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    return 2021 - this.birthday;
}

let emirhan = new Person('emirhan',2005,'developer');
console.log(emirhan);
console.log(emirhan.calculateAge());
