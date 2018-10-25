var faker = require("faker");
console.log("----------------------")
console.log("WELCOME TO ABEL'S SHOP")
console.log("----------------------")

for(let i = 0; i<10; i++){
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price() );
    
}