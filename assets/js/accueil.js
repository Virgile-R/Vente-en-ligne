import Product from "./models/Product.js"
const seller = JSON.parse(sessionStorage.getItem('seller'))

const sellerInfoElements = Object.values(document.querySelectorAll('.mockStateInfo'))

sellerInfoElements.forEach((element) => {
  console.log('element.id', element.id)
  element.innerHTML = seller[element.id]
})

const product1 = new Product("Nike Air", "Des baskets sur un fond arc-en-ciel", 50, "assets/img/pexels-amar-preciado-9993286.jpg")
const product2 = new Product("Adidas Das", "Des baskets sur une moquette", 60, "assets/img/pexels-gustavo-gimenez-9853347.jpg")


// set the product images
document.querySelector('#product1IMG').src = product1.imageURL
document.querySelector('#product2IMG').src = product2.imageURL

// set the product names
document.querySelector("#product1Name").innerHTML = product1.name
document.querySelector("#product2Name").innerHTML = product2.name

// set the product description
document.querySelector("#product1Description").innerHTML = product1.description
document.querySelector("#product2Description").innerHTML = product2.description

// set the product price
document.querySelector("#product1Price").innerHTML = product1.price
document.querySelector("#product2Price").innerHTML = product2.price

