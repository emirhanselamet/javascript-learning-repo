const products = [
    {name:'s7',price:3000},
    {name:'s8',price:2000},
    {name:'s9',price:13000}
]
console.log(Array.from(products,prd => prd.name='s8'));
