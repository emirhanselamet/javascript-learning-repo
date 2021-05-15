//destructring
var a,b,rest;
[a,b] = [10,20];
console.log(a);
console.log(b);

[a,b,...rest] = [10,20,30,40,50];
console.log(a);
console.log(b);
console.log(rest);

//destructring assignment
// array destructring
//object destructring