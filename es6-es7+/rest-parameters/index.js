//ES5
function sum() {
    let arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    let result = 0;

    arr.forEach(function (item) {
        result+=item;
    });
    return result;
}
console.log(sum(10,20,30));

//ES6
function sumES6(...arr) {
    let result = 0;
    arr.forEach(item=>result+=item);
    return result;
}
console.log(sumES6(10,20,30));