//objenin yeteneklerini yeni tanımlayacak olduğumuz nesnenin içerisine prototype şeklinde ekledik.  

let personProto = {
    calculateAge : function () {
        return 2021-this.yearOfBirth;
    }
}

let Emirhan = Object.create(personProto);
Emirhan.name = 'Emirhan';
Emirhan.yearOfBirth = 2005;
Emirhan.job = 'developer';

let kerem = Object.create(personProto,{
    name : {value : 'kerem'},
    yearOfBirth : {value :2010},
    job : { value : 'student'}
});