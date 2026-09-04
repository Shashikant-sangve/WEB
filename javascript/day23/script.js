function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;


    if (username === "" || password === "") {

        alert("Please enter username and password");

        return;
    }

    alert("Login successful!");

    window.location.href = "home.html";
}



function register() {

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("regPassword").value;


    if (name === "" ||
        email === "" ||
        password === "") {

        alert("Please enter all details");

        return;
    }

    alert("Registration successful!");

    window.location.href = "login.html";
}



/* ADD TO CART */

function addToCart(name, price) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    cart.push({

        name: name,

        price: price

    });


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    alert(name + " added to cart!");

}



/* DISPLAY CART */

function displayCart() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    let cartItems =
        document.getElementById("cartItems");


    let total = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<h3 style='text-align:center'>Cart is empty</h3>";

        document.getElementById("total").innerHTML =
            "Total: ₹0";

        return;
    }


    cartItems.innerHTML = "";


    cart.forEach(function(item, index) {

        total = total + item.price;


        cartItems.innerHTML += `

            <div class="cart-item">

                <div>

                    <strong>${item.name}</strong>

                    <br>

                    ₹${item.price}

                </div>


                <button
                    class="remove"
                    onclick="removeItem(${index})">

                    Remove

                </button>

            </div>

        `;

    });


    document.getElementById("total").innerHTML =
        "Total: ₹" + total;

}



/* REMOVE CART ITEM */

function removeItem(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    cart.splice(index, 1);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    displayCart();

}