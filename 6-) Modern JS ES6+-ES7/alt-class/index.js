//ES 5
function personES5(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
personES5.prototype.sayHi = function () {
    return `Hello I'm ${this.firstName} ${this.lastName}`
}

function CustomerEs5(firstName, lastName, phone, username) {
    personES5.call(this, firstName, lastName);
    this.phone = phone;
    this.username = username;
}
CustomerEs5.prototype = Object.create(personES5.prototype);

var customer = new CustomerEs5('Emirhan','Selamet','1241255','strony');
console.log(customer(sayHi()));

//ES6
class personES6{
    constructor(firsname,lastname,) {
        this.firsname = firsname;
        this.lastName = lastname;
    }
    sayHi(){
        return `Hi I'm ${this.firsname} ${this.lastName}`
    }
}
class CustomerEs6 extends personES6{
    constructor(firsname,lastName,phone,username){
        super(firsname,lastName);
        this.phone = phone;
        this.username = username;
    }
}
let sustomer = new CustomerEs6('emirhan','sa','12312312','strr');
console.log(sustomer.sayHi());