<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['add_to_cart'])) {
    $product_id = $_POST['product_id']; // Get the product ID from the form
    $quantity = 1; // For simplicity, assume adding one item at a time

    // If the cart is already set, add to it; otherwise, create a new cart array
    $cart = isset($_SESSION['cart']) ? $_SESSION['cart'] : [];

    // If the product is already in the cart, increase the quantity; otherwise, add it
    if (array_key_exists($product_id, $cart)) {
        $cart[$product_id] += $quantity;
    } else {
        $cart[$product_id] = $quantity;
    }

    $_SESSION['cart'] = $cart; // Save the cart back to the session
}

header("Location: ".$_SERVER['HTTP_REFERER']); // Redirect back to the previous page
exit();
?>
