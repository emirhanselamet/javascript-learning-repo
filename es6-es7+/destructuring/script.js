//destructring
var a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);


// array destructring

const [server, port, timeout] = arrConfig;
console.log(server, port, timeout);

//object destructring
const objConfig = {
    server:'localhost',
    port: ' 8080',
    timeout:900
};
const [server, port, timeout] = objConfig;
console.log(server,port,timeout)