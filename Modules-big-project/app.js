const { UI } = require("winjs");

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
        products: [],
        selectedProduct: null,
        totalPrice: 0
    }
    return {
        getProducts: function () {
            return data.products;
        },
        getData: function () {
            return data;
        },
        addProduct: function (name, pric) {
            let id;
            if (data.items.length > 0) {
                id = data.items[data.prodcuts.length - 1].id + 1;
            } else {
                id = 0;
            }
            const newProduct = new Product(id, name, parseFloat(price));
            data.items.push(newProduct);
            return newProduct;
        }
    }
})();




//UI Controller
const UIContoller = (function () {

    const Selectors = {
        productList: "#itemlist",
        addButton: '.addBtn',
        productName: '#productName',
        productPrice: '#productPrice',
        productCard:'#productCard'
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
        },
        addProduct: function (prd) {
            document.querySelector(Selectors.productCard).style.display='block';
            var item = `
            <tr>
            <td>${prd.id}</td>
            <td>${prd.name}</td>
            <td>${prd.price}</td>
            <td class="text-right"><button type="submit" class="btn btn-secondary btn-sm"> <i class="far fa-edit"></i></button></td>
            </tr>
            `;
            document.querySelector(Selectors.productList).innerHTML += item;
        },
        clearInput : function () {  
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        hideCard : function () {  
            document.querySelector(Selectors.productCard).style.display='none';
        }
    }
})();
//APP Controller
const App = (function (ProductCtrl, UICtrl) {
    const UISelectors = UIContoller.getSelectors();
    //Load Event Listener
    const loadEventListeners = function () {
        //add product event
        document.querySelector(UISelectors.addButton).addEventListener('click', ProductAddSubmit);
    }
    const ProductAddSubmit = function (e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            //add product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);
            //add item list
            UIContoller.addProduct(newProduct)

            UIContoller.clearInputs();
        }

        console.log(productName, productPrice);

        e.preventDefault();
    }
    return {
        init: function () {
            console.log('starting app');

            const prodcuts = ProductCtrl.getProducts();
            if (products.lenghts==0) {
                UICtrl.hideCard();
            }else{
                UICtrl.createProductList(products)
            }
            
            loadEventListeners();
        }
    }

})(ProductContoller, UIContoller);
App.init();