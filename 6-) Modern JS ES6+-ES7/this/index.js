//ES5
let list = {
    catagory: 'phone',
    names: ['i8','i9','i10'],
    call: function () {
        var self = this;
        this.names.map(function (name) {
            console.log(`${self.catagory} + ${name}`);
        })
    }
}

//ES6
let list = {
    catagory: 'phone',
    names: ['i8','i9','i10'],
    call: function () {
        
        this.names.map( (name) => {
            console.log(`${this.catagory} + ${name}`);
        })
    }
}

//es5
function Game() {
    this.live =0;
    this.addLive = function () {
        this.OneUp = setInterval(function () {
            console.log(this.live++)
        },1000)
    }
}

//ES6
function Game() {
    this.live =0;
    this.addLive = function () {
        this.OneUp = setInterval( () => {
            console.log(this.live++)
        },1000)
    }
}


let player = new Game();
player.addLive();
