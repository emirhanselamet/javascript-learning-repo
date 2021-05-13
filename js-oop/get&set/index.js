const person = {
    firstName : 'Emirhan',
    lastName : 'Selamet'
}


Object.defineProperty(person,'fullName',{ 
    get function() {
        return `${this.firstName} ${this.lastName}`
    },
    set function(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(person,'age',{
    value : 50,
    writable : false
})

person.age = 55;

// person.firstName = '';
//person.fullName = ''
//console.log(person.fullName);
console.log(person.age);