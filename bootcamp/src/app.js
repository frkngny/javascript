console.log("Hello Kodlama.io")

let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}

const euroDun = 11.2 // sabittir, sonradan değişmez.

console.log(dolarDun)

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]
console.log(konutKredileri)

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    const element = konutKredileri[i];
    console.log("<li>"+element+"</li>")
}
console.log("</ul>")
