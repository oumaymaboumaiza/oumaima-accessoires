<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Produits</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
    }

    h1 {
        text-align: center;
        margin-top: 20px;
    }

    .products-container {
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .product {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }

    .product img {
        max-width: 100px;
        margin-right: 20px;
    }

    .product-info {
        flex-grow: 1;
    }

    .product-info h3 {
        margin: 0;
    }

    .product-info p {
        margin: 5px 0;
    }

    .add-to-cart {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    .add-to-cart:hover {
        background-color: #45a049;
    }

    .cart {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
</style>
</head>
<body>
    <h1>Produits</h1>
    <div class="products-container">
        <div class="product" id="product1">
            <img src="chemin/vers/image1.jpg" alt="Produit 1">
            <div class="product-info">
                <h3>Produit 1</h3>
                <p>Description du produit 1.</p>
                <p>Prix : 10€</p>
                <button class="add-to-cart" onclick="addToCart('Produit 1', 10)">Ajouter au panier</button>
            </div>
        </div>
        <div class="product" id="product2">
            <img src="chemin/vers/image2.jpg" alt="Produit 2">
            <div class="product-info">
                <h3>Produit 2</h3>
                <p>Description du produit 2.</p>
                <p>Prix : 20€</p>
                <button class="add-to-cart" onclick="addToCart('Produit 2', 20)">Ajouter au panier</button>
            </div>
        </div>
        <!-- Ajoutez plus de produits ici -->
    </div>
    <div class="cart" id="cart"></div>
    <script>
        let cartItems = [];

        function addToCart(name, price) {
            cartItems.push({ name, price });
            updateCart();
        }

        function updateCart() {
            let cartElement = document.getElementById('cart');
            cartElement.innerHTML = '<h2>Panier</h2>';
            let totalPrice = 0;
            for (let item of cartItems) {
                cartElement.innerHTML += `<p>${item.name} - ${item.price}€</p>`;
                totalPrice += item.price;
            }
            cartElement.innerHTML += `<p>Total : ${totalPrice}€</p>`;
        }
    </script>
</body>
</html>
