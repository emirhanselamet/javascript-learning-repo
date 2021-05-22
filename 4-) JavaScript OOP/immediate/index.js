
//immediate function sadece tarayıcı başladığında çalışır 1 kere 
(function(name){
    var days = ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','saturday'];
    
    var today = new Date();
    
    var message = 'Welcome'+ name +  'Today ' + days[today.getDay()];
    return message;
    
    console.log(message);
})('Emirhan');


