//ES 5
var personES5 = function (name, job, yearofBith) {
    this.name = name;
    this.job = job;
    this.yearofBith = yearofBith;
}
personES5.prototype.calculateAge = function () {
    2021 - this.yearofBith;
}

var emirhan = new personES5('Emirhan', 'developer', 2005);
console.log(emirhan.calculateAge());

//ES6

class personES6 {
    constructor(name, job, yearofBith) {
        this.name = name;
        this.job = job;
        this.yearofBith = yearofBith;
    }
    calculateAge() {
        return 2021 - this.yearofBith;
    }

}

let emirhan = new personES6('EMirhan', 'developer', 2005);
console.log(emirhan.calculateAge());