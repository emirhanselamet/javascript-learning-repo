var welcome = function (a,b) {
    console.log('WElcome' + this.name+ ' İLgili misin'+ a + ' and '+b);
}
var emirhan = {name : 'Emirhan'};
welcome.call(emirhan,'javascript','nodejs');

welcome.apply(emirhan,['javascript','nodejs']);

welcomeEmirhan =  welcome.bind(emirhan);
welcomeEmirhan('javascript','nodejs');