const products =[
    {name:'iphone',price:10000},
    {name:'iphon123e',price:10000},
    {name:'iphone123',price:10000}
]


var ProductController = (function (data) {
    //private members
    var collections =  data || [];

    const addProduct = function (product) {
        collections.push(product);
    }
    const removeProduct = function (product) {
        var index = collections.indexOf(product);

        if (index >= 0) {
            collections.splice(index, 1);
        }
    }
    const getProducts = function () {
        return collections;
    }
    //public 
    return {
        addProduct,
        removeProduct,
        getProducts
    }
})(products);


ProductController.addProduct(products[0]);
ProductController.addProduct(products[2]);
ProductController.addProduct(products[1]);

console.log(ProductController.getProducts());