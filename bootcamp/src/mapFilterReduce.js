let cart = [
    {id:1, productName:"Phone", quantity:3, unitPrice:4000},
    {id:2, productName:"Glass", quantity:2, unitPrice:30},
    {id:3, productName:"Pencil", quantity:1, unitPrice:20},
    {id:4, productName:"Charger", quantity:2, unitPrice:100},
    {id:5, productName:"Book", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

cart.map(product => {
    console.log(product.productName + " : " + product.unitPrice * product.quantity)
})

let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)
console.log(total)

let quantityOver2 = cart.filter(product => product.quantity > 2 && product.unitPrice > 100)
console.log(quantityOver2)

// reference type
function addToCart(sepet) {
    sepet.push({id:7, productName:"Laptop", quantity:1, unitPrice:10000})
}

addToCart(cart)
console.log(cart)

// value type
let sayi = 10
function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)

