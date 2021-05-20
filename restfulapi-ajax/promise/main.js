// var p = new Promise(function (resolve, reject) {
//     if (true) {
//         resolve('succes');
//     }
//     else{
//         reject('Fail')
//     }
// });

// p.then(function (data) {  
//     console.log(data);
// }).catch(function (error) {  
//     console.log(error);
// });

new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(5);
    }, 1000);
}).then(function (number) {

    console.log(number);
    return number * number;

}).then(function (number) {

    console.log(number);
    return number * number;

});


const isMomHappy = true;

const willGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            name: 'Iphone 11',
            price: 10000,
            color: 'silver'
        }
        resolve(phone);
    }
    else {
        const error = new Error('mom is not happy');
        reject(error);
    }
});

const showFriends = function (phone) {  
    const message = "Hey friends this is my new phone " + phone.name;
    return Promise.resolve(message);
}



const askMom = function () {
    willGetNewPhone
        .then(showFriends)
        .then(message => console.log(message))
        .catch(error => {
            console.log(error);
        })
}
askMom();