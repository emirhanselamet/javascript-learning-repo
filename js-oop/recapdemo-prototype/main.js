//Bir kişinin yıl içinde aldığı toplam maaş ve toplam vergiyi hesaplayan kodlar

function Employee(name,salary) {
    //oluşan nesne'nin employee türünde değilse bu durumda new anahtar sözcüğünü oluştur.
    if(!this instanceof Employee){
        return new Employee(name,salary);
    }
    this.name = name;
    this.salary = salary;
}

Employee.prototype.calculateSalary = function () {
    //tax = vergi
    var month = new Date().getMonth()+1; // İçinde bulunan ayı hesaplar
    var tax = 0;
    total = this.salary*month;

    if (total<=20000) {
        tax = total*0.2;
    }
    else if(total > 20000 && total<=30000){
        tax = total * 0.25;
    }
    else{
        tax = total * 0.3;
    }
    return{
        tax : tax,
        paid : total - tax
    }
}

var emp1 = new Employee('Emirhan',5000);
var emp1_salary = emp1.calculateSalary();

console.log(`${emp1.name} isimli kişi toplam ${emp1_salary.tax} kadar vergi ödemiştir hah ${emp1_salary.paid} kadar da maaş almıştır.`)


var emp2 = new Employee('Kerem', 3000);
console.log(emp2.calculateSalary());