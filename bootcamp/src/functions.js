function addToCart(quantity, productName="Elma") {
    console.log("Added to cart: " + productName + ", adet: " + quantity)
}

//addToCart()
addToCart(10)
//addToCart("iPhone 11")

let sayHello = ()=>{
    console.log("Hello world!")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello world 2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

function addToCart3(product) {
    console.log("Product: " + product.productName)
    console.log("Unit Price: " + product.unitPrice)
    console.log("Quantity: " + product.quantity)
}
let product1 = {productName:"Elma", unitPrice:10, quantity:5}
addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}

product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:8, quantity:2},
    {productName:"Karpuz", unitPrice:20, quantity:1}
]
addToCart4(products)


function add(bisey, ...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        total += element
    }
    console.log(total)
    console.log(bisey)
}
add(3,5,30,50)

let numbers = [30,10,50,600,120]
console.log(Math.max(...numbers))


let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"Elma", unitPrice:10, quantity:5})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)