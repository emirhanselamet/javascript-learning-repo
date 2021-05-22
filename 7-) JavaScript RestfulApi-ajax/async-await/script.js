async function fn() {
    return "hello"
}
fn()
    .then(res => console.log(res));

function getCatagory() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('phone');
        }, 1000);
    })
}
function getProducts(catagory) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`5 products in ${catagory}`);
        }, 1000);
    });
}

getCatagory()
    .then(getProducts)
    .then(res => console.log(res));
async function getProduct() {
    let catagory = await getCatagory();
    let result = await getProduct(catagory);
    console.log(result);
}