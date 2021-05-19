var products =[
    {id:1,name:'İphone X',price:10000},
    {id:2,name:'İphone X1',price:20000},
    {id:3,name:'İphone X2',price:30000},
    {id:4,name:'İphone X13',price:40000}
]
let added  = true;
function addProducts(prd,callback) {
    if (added) {
        setTimeout(()=>{
            products.push(prd);
            callback(null,prd);
        },2000);
    }
    else{
        callback('500',prd);
    }

    
}
function getProduct() {
    setTimeout(() => {
        products.forEach(p=>{
            console.log(p.name);
        })
    }, (1000));
}
addProducts({id:5,name:'İphone X123',price:40000},function(err,data){
    if (err) {
        console.log('hata: '+err);
    }
    else{
        console.log(data);
    }
});