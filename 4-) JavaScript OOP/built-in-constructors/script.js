// String

var str1 = 'Emirhan';
var str2 = new String('Emirhan');

console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

if(str2 == 'Emirhan'){
    console.log('yes');
}else{
    console.log('no');
}


String.prototype.repeat = function(n){
    return new Array(n+1).join(this);
}


console.log('Emirhan'.repeat(4));

// Number
var num1 = 10;
var num2 = new Number(10);

// Boolean
var bool1 = true;
var bool2 = new Boolean(true);

// Object
var obj1 = {
    name : 'Emirhan'
}

var obj2 = new Object({
    name : 'Emirhan'
});


// Array
var arr1 = ['kerem','emirhan','ali','mehmet'];
var arr2 = new Array('kerem','emirhan','ali','mehmet');

Array.prototype.remove = Array.prototype.remove || function(member){
    var index = this.indexOf(member);
    if(index > -1){
        this.splice(index,1);
    }
    return this;
}

console.log(arr1.remove('ali'));