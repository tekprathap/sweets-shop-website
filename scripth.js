var menus = document.querySelector('#menusicon');
var nav_list = document.querySelector('.ul-list');

menus.addEventListener("click", () => {
  nav_list.classList.toggle("showmenu");
});

const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');

btnCart.addEventListener("click", () => {
  cart.classList.add('cart-active');
});

btnClose.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});

document.addEventListener('DOMContentLoaded', loadFood);

function loadFood() {
  loadContent();
}

const sweetItems = [
  { name: "Ladoo", price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToP5jO0M2gUpKYE_XmrSSd6Cl-GrCmmgs6vg&s", sweetdetail: "Soft and rich boondi ladoo made with ghee and sugar – perfect for festivals and celebrations." },
  { name: "Jalebi", price: 260, image: "https://dataoils.com/wp-content/uploads/2022/12/recipes-img-6.jpg", sweetdetail: "Crispy and juicy spirals soaked in sugar syrup, made fresh with desi style." },
  { name: "Mysore Pak", price: 200, image: "https://media.istockphoto.com/id/499045932/photo/mysore-pak.jpg?s=612x612&w=0&k=20&c=RGJzhT4DPJLLqX0LVwhDpNlxD7GtjSyZLguKh8uLAiY=", sweetdetail: "Traditional Mysore Pak with pure ghee and gram flour – melts in your mouth instantly!" },
  { name: "Jangiri", price: 200, image: "https://vaya.in/recipes/wp-content/uploads/2018/03/Jangiri.jpg", sweetdetail: "Bright orange jangiri made with urad dal and soaked in flavored syrup – soft and juicy." },
  { name: "Badusha", price: 250, image: "https://snackattack.in/images/products/1ddf9873-a576-492c-9021-f9da8c95fbf4thumb.jpg", sweetdetail: "Flaky and layered sweet with a golden crust – mildly sweet and perfect with tea."},
  { name: "butter murukku", price: 250, image: "https://in.gramango.com/uploads/products/1650613659bmggl.jpg", sweetdetail: "Crispy butter murukku made with rice flour and fried to perfection – a crunchy snack for all ages." },
  { name: "onion pakoda", price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvY88N2qhNmv8VQuMUXP3R3_P221B6tgDQg&s", sweetdetail: "Crispy onion pakoda with gram flour, spices, and curry leaves – a spicy evening snack." },
  { name: "peanut pakoda", price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HJeGISpf3rPjKGogCya6nbkHvXxmPFycTw&s", sweetdetail: "Spicy and crunchy pakoda made with whole peanuts – perfect with tea or coffee." },
  { name: "ompodi", price: 250, image: "https://www.satturmittaikadai.com/image/catalog/savouries/Ompodi.jpg", sweetdetail: "Light and airy ompodi made with besan and ajwain – ideal for mixture and festive combos."},
  { name: "kara boondi", price: 250, image: "https://i.ytimg.com/vi/lwrG7NntGLE/maxresdefault.jpg", sweetdetail: "Spicy kara boondi tossed with curry leaves and pepper – perfect for mixing or munching." },
  { name: "Milk Halwa", price: 300, image: "https://www.agarwalbhavansweets.com/cdn/shop/files/MILKHALWA.png?v=1711618111", sweetdetail: "Rich and creamy milk halwa slow-cooked with khoya and sugar – a royal sweet for special occasions." },
  { name: "Special Mixture", price: 270, image: "https://5.imimg.com/data5/FL/YA/MW/SELLER-2531189/a62a3950-500x500.JPG", sweetdetail: "Crunchy south Indian mixture loaded with boondi, kara sev, nuts, and flavorful spices – a spicy treat!" },
  { name: "Kara Muruku", price: 250, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHEyh6zHmpjXTvljYQfNWpVCzQKyvwUuTv5slmwf6XNJ7QYlGANNg85FLyQy9ZnWm49Jpg7UvlG2MguDrS1NgR8YVLD97i_egQYZLYr_D_JNtPm9HuxsYVy0UgR1hLwqB75GXjRIlVWAY/s1600/besan-murukku.jpg", sweetdetail: "Classic kara murukku made with rice flour and sesame – crispy, spicy, and addictive with every bite." },
  { name: "gulab jamun", price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aJrkMZfZWaRkqQu36Y9TBzYlCrkKHvy7mw&s", sweetdetail: "Soft milk-solid balls soaked in rose-flavored sugar syrup – the king of Indian sweets."},
  { name: "Plain Chakodi", price: 250, image: "https://bandarmithai.in/cdn/shop/products/chakodi.jpg?v=1601750611&width=600", sweetdetail: "Traditional Andhra-style chakodi – crunchy rice flour rings spiced with jeera and love." },
  { name: "ola pakoda", price: 250, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/ribbon-pakoda-recipe-1-500x500.jpg", sweetdetail: "Ribbon-like crispy pakoda made with besan and rice flour – perfect for snacking anytime." }
];

let itemList = [];

const container = document.querySelector('.menu-container');
const search = document.querySelector('#search');

// Function to render sweets
function renderSweets(items) {
  const sweetCards = items.map(item => {
    return `
      <div class="sweet-card">
        <img src="${item.image}" alt="${item.name}" id="itemimage">
        <h1 id="itemname">${item.name}</h1>
        <p id="itemprice">${item.price}₹</p>
        <div class="sweet-buttons">
        <button class="order-btn" onclick="orderSweet('${item.name}', '${item.image}', ${item.price}, \`${item.sweetdetail}\`)">Order Now</button>


          <button class="addcart-btn" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">Add to Cart</button>
        </div>
      </div>
    `;
  }).join('');
  container.innerHTML = sweetCards;

  // Add event listener to addcart buttons
  const addCartButtons = document.querySelectorAll('.addcart-btn');
  addCartButtons.forEach(button => {
    button.addEventListener('click', carddata);
  });
}

// Initial render
renderSweets(sweetItems);

// Filter on input
search.addEventListener("input", () => {
  const searchValue = search.value.toLowerCase();
  const filteredItems = sweetItems.filter(item =>
    item.name.toLowerCase().includes(searchValue)
  );
  renderSweets(filteredItems);
});

// Add item to cart
function carddata(event) {
  const button = event.target;
  const sweetName = button.getAttribute("data-name");
  const sweetPrice = parseInt(button.getAttribute("data-price"));
  const sweetImg = button.getAttribute("data-image");

  // Check if item is already in the cart
  if (itemList.find(item => item.foodName === sweetName)) {
    alert("Product already in cart");
    return;
  }

  // Add item to the cart list
  itemList.push({ foodName: sweetName, foodPrice: sweetPrice, foodImg: sweetImg, quantity: 1 });
  updateCart();
}

// Update cart display
function updateCart() {
  const cartContent = document.querySelector(".cart-content");
  if (!cartContent) return; // Early return if the cart content doesn't exist

  cartContent.innerHTML = itemList.map(item => `
    <div class="cart-box">
      <img src="${item.foodImg}" class="cart-img">
      <div class="detail-box">
        <div class="cart-food-title">${item.foodName}</div>
        <div class="price-box">
          <div class="cart-price">${item.foodPrice}₹</div>
          <span>${item.quantity}kg</span>
          <div class="cart-amt">₹${item.foodPrice * item.quantity}</div>
        </div>
        <input type="number" value="${item.quantity}" class="cart-quantity" min="1" onchange="updateQuantity('${item.foodName}', this.value)">
      </div>
      <ion-icon name="trash" class="cart-remove" onclick="removeItem('${item.foodName}')">🗑</ion-icon>
    </div>
  `).join('');

  updateTotal();
  updateBuyButtonVisibility();
}

// Update the quantity of an item
function updateQuantity(foodName, quantity) {
  const item = itemList.find(item => item.foodName === foodName);
  if (item) {
    item.quantity = parseInt(quantity);
    updateCart();
  }
}

// Update the total price
function updateTotal() {
  const total = itemList.reduce((acc, item) => acc + (item.foodPrice * item.quantity), 0);
  document.querySelectorAll(".cart-amt").forEach((element, index) => {
    element.textContent = `₹${itemList[index].foodPrice * itemList[index].quantity}`;
  });

  const totalElement = document.querySelector(".total-price");
  if (totalElement) {
    totalElement.textContent = `Total: ₹${total}`;
  }
}

// Remove an item from the cart
function removeItem(foodName) {
  itemList = itemList.filter(item => item.foodName !== foodName);
  updateCart();
}

// Update visibility of the Buy Now button
function updateBuyButtonVisibility() {
  const buyButton = document.querySelector("#buy-button");
  if (itemList.length > 0) {
    buyButton.style.display = "block";
  } else {
    buyButton.style.display = "none";
  }
}
function orderSweet(name, image, price, sweetdetail) {
  const newWindow = window.open("", "_blank");
  if (!newWindow) {
      alert("Popup blocked! Please allow popups for this site.");
      return;
  }

  newWindow.document.write(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sweet Shop</title>
  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #fff8f0;
    padding: 20px;
  }

  .btn {
    position: fixed;
    top: 10px;
    right: 20px;
    font-size: 32px;
    background: none;
    border: none;
    color: #ff3e3e;
    cursor: pointer;
    font-weight: bold;
    z-index: 1000;
  }

  .datadatail {
    display: flex;
    flex-direction: row;
    gap: 40px;
    background: #fff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    margin: 50px auto;
    flex-wrap: wrap;
  }

  .swithsimage {
    flex: 1 1 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swithsimage img {
    width: 100%;
    max-width: 350px;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .sweetdetail {
    flex: 1 1 300px;
  }

  .sweetdetail h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #d35400;
  }

  .sweetdetail .price-display {
    font-size: 1.5rem;
    color: #27ae60;
    margin-bottom: 20px;
  }

  .sweetdetail p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;
  }

  .btns {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .btn-buy,
  .order-btn {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .btn-buy {
    background-color: #f39c12;
    color: white;
  }

  .btn-buy:hover {
    background-color: #e67e22;
  }

  .order-btn {
    background-color: #3498db;
    color: white;
  }

  .order-btn:hover {
    background-color: #2980b9;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .datadatail {
      flex-direction: column;
      padding: 20px;
    }

    .sweetdetail h1 {
      font-size: 1.6rem;
    }

    .sweetdetail .price-display {
      font-size: 1.2rem;
    }

    .sweetdetail p {
      font-size: 0.95rem;
    }

    .btn-buy,
    .order-btn {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    body {
      padding: 10px;
    }

    .datadatail {
      padding: 15px;
    }

    .sweetdetail h1 {
      font-size: 1.4rem;
    }

    .sweetdetail .price-display {
      font-size: 1.1rem;
    }

    .sweetdetail p {
      font-size: 0.9rem;
    }

    .btn-buy,
    .order-btn {
      font-size: 0.95rem;
    }
  }
</style>

</head>
<body>
  <button class="btn" onclick="window.close()">&times;</button>
  <div class="datadatail">
      <div class="swithsimage">
          <img src="${image}" alt="${name}">
      </div>
      <div class="sweetdetail">
          <h1>${name}</h1>
          <h2>Best Quality & Taste</h2>
          <h2 id="price-display" class="price-display">₹${price}</h2>
          <p>${sweetdetail}</p>
          <input type="number" id="quantity" class="quantity-input" min="1" value="1" onchange="updatePrice(${price})">
          <div class="btns">
              <button class="btn-buy" onclick="openPlaceOrder()">Place Order</button>
              <button class="order-btn" data-name="${name}" data-price="${price}" data-image="${image}" onclick="addToCart('${name}', ${price}, '${image}')">Order Now</button>
          </div>
      </div>
  </div>
  <script>
      function updatePrice(basePrice) {
          const quantity = document.getElementById('quantity').value;
          const totalPrice = basePrice * quantity;
          document.getElementById('price-display').textContent = '₹' + totalPrice;
      }
      function addToCart(name, price, image) {
          const quantity = parseInt(document.getElementById('quantity').value);
          window.opener.carddata({
              target: {
                  getAttribute: (attr) => {
                      if (attr === 'data-name') return name;
                      if (attr === 'data-price') return price;
                      if (attr === 'data-image') return image;
                  }
              }
          });
          window.opener.updateQuantity(name, quantity);
      }
      function openPlaceOrder() {
          window.opener.placerder();
          window.close();
      }
  </script>
</body>
</html>
  `);
  newWindow.document.close();
}

function placerder() {
  const pricerder = window.open('', '_blank');
  let totalprice = itemList.reduce((arr, item) => arr + (item.foodPrice * item.quantity), 0);

  pricerder.document.write(`
     <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sweet Shop Order</title>
  <style>
      body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: #fff5e6;
          font-family: Arial, sans-serif;
      }
      .placeorder {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          flex-direction: column;
          padding: 20px;
      }
      .placeorder h1 {
          font-size: 26px;
          margin-bottom: 10px;
          color: #d35400;
          font-weight: bold;
      }
      label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
      }
      input, select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-sizing: border-box;
          margin-bottom: 10px;
      }
      button {
          background-color: #ff6600;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
      }
      button:hover {
          background-color: #cc5200;
      }
      .error {
          color: red;
          font-size: 14px;
      }
  </style>
</head>
<body>
  <div class="placeorder">
      <h1>Welcome to Our Sweet Shop</h1>
      <p>Choose your favorite sweets and place your order below</p>
      <form id="placeorder">
          <div>
              <label for="sweetname">Sweet Name</label>
              <select id="sweetname">
                  ${itemList.map(item => `<option>${item.foodName} (${item.quantity}kg) - ₹${item.quantity * item.foodPrice}</option>`).join('')}
              </select>
              <span id="sweetnameError" class="error"></span>
          </div>
          <div class="price">
              <h1>₹${totalprice}</h1>
              <p id="price-error" class="error"></p>
          </div>
          <div>
              <label for="customername">Your Name</label>
              <input type="text" id="customername">
              <span id="nameError" class="error"></span>
          </div>
          <div>
              <label for="customeremail">Email</label>
              <input type="email" id="customeremail">
              <span id="emailError" class="error"></span>
          </div>
          <div>
              <label for="customernumber">Mobile Number</label>
              <input type="tel" id="customernumber">
              <span id="mobileError" class="error"></span>
          </div>
          <button type="submit">Place Order</button>
      </form>
  </div>
  
  <script>
      document.querySelector("#placeorder").addEventListener('submit', function (e) {
          e.preventDefault();
          validateForm();
      });

      function validateForm() {
          let isValid = true;

          const sweetname = document.querySelector("#sweetname").value.trim();
          const customername = document.querySelector("#customername").value.trim();
          const customeremail = document.querySelector("#customeremail").value.trim();
          const customernumber = document.querySelector("#customernumber").value.trim();

          const sweetnameError = document.querySelector("#sweetnameError");
          const nameError = document.querySelector("#nameError");
          const emailError = document.querySelector("#emailError");
          const mobileError = document.querySelector("#mobileError");

          // Reset errors
          sweetnameError.textContent = "";
          nameError.textContent = "";
          emailError.textContent = "";
          mobileError.textContent = "";

          if (sweetname === "") {
              sweetnameError.textContent = "Please select a sweet.";
              isValid = false;
          }

          if (customername === "") {
              nameError.textContent = "Name is required.";
              isValid = false;
          }

          if (customeremail === "") {
              emailError.textContent = "Enter a valid email.";
              isValid = false;
          }

          if (customernumber.length !== 10 || isNaN(customernumber)) {
              mobileError.textContent = "Enter a valid 10-digit mobile number.";
              isValid = false;
          }

          if (isValid) {
              alert("Order placed successfully!");
              console.log("Customer Name:", customername);
              console.log("Customer Email:", customeremail);
              console.log("Customer Number:", customernumber);
              console.log("Total Price:", ${totalprice});
              console.log("Ordered Items:", ${JSON.stringify(itemList)});

      
          }
      }
  </script>
</body>
</html>
  `);
  pricerder.document.close();
}




function updateBuyButtonVisibility() {
  const buyButton = document.querySelector('.btn-buy');
  if (buyButton) {
      buyButton.style.display = itemList.length === 0 ? "none" : "block";
  }
}

updateBuyButtonVisibility();

function updateBuyButtonVisibility() {
  const buyButton = document.querySelector('.btn-buy');
  if (buyButton) {
      buyButton.style.display = itemList.length === 0 ? "none" : "block";
  }
}

updateBuyButtonVisibility();




  // Get values
// Get form elements
let formuser = document.getElementById("formuser");
let username = document.getElementById("username");
let email = document.getElementById("useremail");
let contact = document.getElementById("usercontact");
let message = document.getElementById("usermessage");

// Event listener for form submission
formuser.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting
  formuservalidation();
});

// Function to validate form
function formuservalidation() {
  // Clear previous error messages
  document.getElementById("error-name").innerText = "";
  document.getElementById("error-email").innerText = "";
  document.getElementById("error-contact").innerText = "";
  document.getElementById("error-message").innerText = "";

  // Trim input values
  let namevalue = username.value.trim();
  let emailvalue = email.value.trim();
  let contactvalue = contact.value.trim();
  let messagevalue = message.value.trim();

  let valid = true;

  // Name validation
  if (namevalue === "") {
      document.getElementById("error-name").innerText = "Name is required.";
      valid = false;
  }

  // Email validation using regex
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailvalue)) {
      document.getElementById("error-email").innerText = "Enter a valid email address.";
      valid = false;
  }

  // Contact number validation (must be 10 digits)
  let phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(contactvalue)) {
      document.getElementById("error-contact").innerText = "Enter a valid 10-digit phone number.";
      valid = false;
  }

  // Message validation
  if (messagevalue === "") {
      document.getElementById("error-message").innerText = "Message cannot be empty.";
      valid = false;
  }

  // If all fields are valid, show success message
  if (valid) {
      alert("Form submitted successfully!");
      formuser.reset(); // Reset the form
  }
}







  

