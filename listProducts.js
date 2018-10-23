var faker = require("faker");


var product = faker.commerce.productName();
var price = faker.commerce.price();

for(let i = 0; i<10; i++){
    console.log(product);
    console.log(price);
}