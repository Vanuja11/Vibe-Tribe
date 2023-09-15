
let carts = document.querySelectorAll("#cart");

let products = [
  { id: 1, name: 'violin', tag: 'viloin', price: 122, CartCount: 0 },
  { id: 2, name: 'Super Strat Guitar', tag: 'electriv guitar black', price: 175, CartCount: 0 },
  { id: 3, name: 'Les Paul Guitar', tag: 'electric guitar red', price: 153, CartCount: 0 },
  { id: 4, name: 'Classical Box Guitar', tag: 'guitar3', price: 110, CartCount: 0 },
  { id: 5, name: 'Snare Drum', tag: 'drum', price: 102, CartCount: 0 },
  { id: 6, name: '3 Peice Drum Set', tag: 'drum set', price: 530, CartCount: 0 },
  { id: 7, name: 'Wooden Xylophone', tag: 'xylophone', price: 34, CartCount: 0 },
  { id: 8, name: 'Tamborine', tag: 'tamborine', price: 14, CartCount: 0 },
  { id: 9, name: 'Standard Bb Trumpet', tag: 'trumpet', price: 89, CartCount: 0 },
  { id: 10, name: 'ALTO Saxophone', tag: 'sax', price: 249, CartCount: 0 },
  { id: 11, name: 'C Flute Closed Hole', tag: 'recorder', price: 67, CartCount: 0 },
  { id: 12, name: 'Cymbal Set', tag: 'cymbals 2', price: 35, CartCount: 0 },
  { id: 13, name: 'Bluettoth On-Ear Headphones', tag: 'headphones', price: 16, CartCount: 0 },
  { id: 14, name: 'Wireless Karaoke Microphone', tag: 'mic', price: 21, CartCount: 0 },
  { id: 15, name: 'Bluetooth Bookshelf Speakers', tag: 'speaker', price: 200, CartCount: 0 },
  { id: 16, name: 'Standalone DJ Controller', tag: 'dj', price: 279, CartCount: 0 },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNum(products[i]);
    calTotal(products[i]);
  });
}

function cartNum(products) {
  let productNum = localStorage.getItem("cartNum");
  productNum = parseInt(productNum);

  if (productNum) {
    localStorage.setItem("cartNum", productNum + 1);
  } else {
    localStorage.setItem("cartNum", 1);
  }
  settingItems(products);
}

function settingItems(products) {
  let cartProducts = localStorage.getItem('productsInCart');
  cartProducts = JSON.parse(cartProducts);

  if (cartProducts != null) {
    if (cartProducts[products.id] == undefined) {
      cartProducts = {
        ...cartProducts,
        [products.id]: products
      }
    }
    cartProducts[products.id].CartCount += 1;
  } else {
    products.CartCount = 1;
    cartProducts = {
      [products.id]: products
    }
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartProducts));
}
function calTotal(products) {
  let cartTotal = localStorage.getItem('totalCost');

  if (cartTotal != null) {
    cartTotal = parseInt(cartTotal);
    localStorage.setItem('totalCost', cartTotal + products.price);
  } else {
    localStorage.setItem('totalCost', products.price);
  }
}
function displayCart() {
  let cartTotal = localStorage.getItem('totalCost');
  let cartProducts = localStorage.getItem('productsInCart');
  cartProducts = JSON.parse(cartProducts);
  let cartContainer = document.querySelector(".printCart");

  console.log(cartProducts);
  if (cartProducts && cartContainer) {
    cartContainer.innerHTML = '';
    Object.values(cartProducts).map(item => {
      cartContainer.innerHTML += `
        
            <div class="product" style="font-size:17px;">
            &nbsp&nbsp&nbsp&nbsp&nbsp<button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img src="images/${item.tag}.jpg">
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${item.name}</span>
                  
            </div>
            <div class="price" style="font-size:18px;">
                $${item.price}.00 
            </div>
            <div class="quantity" style="font-size:18px;"> 
                <span>${item.CartCount}</span>
            </div>
            <div class="total" style="font-size:18px;">
                $${item.CartCount * item.price}.00
        </div>`

    })
    cartContainer.innerHTML += `
            <div class="totalBasket">
                <h4 class="totalTitle">
                    Basket Total
                </h4>
                <h4 class="totalBas">
                    $${cartTotal}.00
                </h4>
                
            </div>
            <div class="proceed">
            <a href="checkout.html" target=_self>Proceed to checkout</a>
            </div>
            `
  }
}
displayCart();
function removeFromCart(id) {
  let cartProducts = localStorage.getItem('productsInCart');
  cartProducts = JSON.parse(cartProducts);

  let cartTotal = localStorage.getItem('totalCost');

  if (cartProducts[id]) {
    cartTotal = cartTotal - (cartProducts[id].price * cartProducts[id].CartCount);
    delete cartProducts[id];
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartProducts));
  localStorage.setItem('totalCost', cartTotal);

  displayCart();
}

