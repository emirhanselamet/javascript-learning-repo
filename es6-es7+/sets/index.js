let val;
var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add('iki');
mySet.add({ a: 1, b: 2 });

var obj = { a: 1, b: 2, c: 3 };

mySet.add(obj);

val = mySet.has(1);
val = mySet.has(3);
val = mySet.has(obj);
mySet.delete(1);


console.log(mySet);