var num={
    min : 0,
    max : 100,
    chechNumericRange : function (value) {
        if(typeof value !== 'number'){
        return false;
    }
    else{
        return value >= this.min && value<=this.max;
    }
}
}
console.log(num.chechNumericRange(20));
console.log(num.chechNumericRange(-20));

var num1 = {
    min : 50,
    max : 60
};
console.log(num.chechNumericRange.call(num1,55));

var checkNumber = num.chechNumericRange.bind(num1);
console.log(checkNumber(56));