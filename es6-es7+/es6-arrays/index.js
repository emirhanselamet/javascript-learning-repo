const products = [
    {name:'s7',price:3000},
    {name:'s8',price:2000},
    {name:'s9',price:13000},
    {name:'s10',price:13000}
]
console.log(Array.from(products,prd => prd.name='s8'));
console.log(Array.find(products,prd => prd.name='s8'));
console.log(Array.filter(products,prd => prd.name='s8'));
console.log(products.findIndex(prd => prd.price==2000));