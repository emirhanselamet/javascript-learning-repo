//Storage Controller
const StorageContoller = (function () {

})();


//Product Controller
const ProductContoller = (function () {
    const Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products: [
            { id: 0, name: 'Monitor', price: 100 },
            { id: 1, name: 'Ram', price: 200 },
            { id: 2, name: 'Klavte', price: 300 }
        ],
        selectedProduct: null,
        totalPrice: 0
    }
    return {
        getProducts: function () {
            return data.products;
        },
        getData: function () {
            return data;
        }
    }
})();




//UI Controller
const UIContoller = (function () {

    const Selectors = {
        productList: "#itemlist"
    }


    return {
        createProductList: function (products) {
            let html = '';

            prodcuts.forEach(prd => {
                html += `
            <tr>
            <td>${prd.id}</td>
            <td>${prd.name}</td>
            <td>${prd.price}</td>
            <td class="text-right"><button type="submit" class="btn btn-secondary btn-sm"> <i class="far fa-edit"></i></button></td>
            </tr>
            `;
            });


            document.querySelector(Selectors.productList).innerHTML = html;
        },
        getSelectors: function () {
            return Selectors;
        }
    }
})();
//APP Controller
const App = (function (ProductCtrl, UICtrl) {

    return {
        init: function () {
            console.log('starting app');
            const prodcuts = ProductCtrl.getProducts();

            UICtrl.createProductList(products);
        }
    }

})(ProductContoller, UIContoller);
App.init();