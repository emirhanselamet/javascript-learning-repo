let welcomeES6 = () => {
    console.log('Welcome Home Sir');
};
welcomeES6();

//with parameters

let multiplyES6 = (x, y) => x * y;
let multiplyES6s = (x, y) => { return x * y };

console.log(multiplyES6(4, 5));
console.log(multiplyES6s(4, 5));

//ES 5
let split = function (text) {
    return text.split(' ');
}
console.log(split('Merhaba Ben kimse'));

//ES 6 

let splipt6 = (text) => text.splipt6(' ');
console.log(splipt6('Merhaba Ben kimse'));

// Object Literals

//ES 5

let getProduct = function (id, name) {
    return {
        id: id,
        name: name
    };
}
console.log(getProduct('1', 'hi'));
//ES 6

let getProductES6 = (id, name) => (
    {
        id: id,
        name: name
    }
);

const phones = [
    { name: 'x', price: 3000 },
    { name: 'x1', price: 300 },
    { name: 'x2', price: 30000 }
];
//ES5 
let pricesES5 = phones.map(function (phone) {
    return phone.price;
});
console.log(pricesES5);

//eS6
let pricesES6 = phones.map(phone => phone.price);
console.log(pricesES6);

//ES5
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenES5 = arr.filter(function (a) {
    return a % 2 == 0;
})

//ES 6
let evenES6 = arr.filter(a => a % 2 == 0);
console.log(evenES6);