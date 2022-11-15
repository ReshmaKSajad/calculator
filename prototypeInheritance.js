var baleno={
    variant : "petrol",
    name : "baleno",
    price : "9lac",
    color : "grey",
    break : "abs",
    brand : "nexa",
    getPrice(){
        return this.price
    }

}

var glanza ={
    name : "glanza",
    brand : "toyotta"
}

glanza.__proto__=baleno
console.log(glanza.getPrice());

// var Array = {}
// ar = []
// ar.__proto__=Array