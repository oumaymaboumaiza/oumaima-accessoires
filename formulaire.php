<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Formulaire de Commande</title>
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

.container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea,
select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type="submit"] {
    background-color: #575f58;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

input[type="submit"]:hover {
    background-color: #565c56;
}
</style>
</head>
<body>
<h1>Formulaire de Commande</h1>
<div class="container">
<form action="traitement.php" method="post">
<label for="nom">Nom :</label>
<input type="text" placeholder="entrez votre nom ici...">

<label for="email">Email :</label>
<input type="text" placeholder="entrez votre email ici...">


<label for="telephone">Téléphone :</label>
<input type="text" placeholder="entrez votre telephone ici...">

<label for="adresse">Adresse :</label><br>
<textarea id="adresse" name="adresse" rows="4" cols="50" required></textarea><br><br>


<label for="produit">Produit :</label>
<select id="produit" name="produit" required>
<option value="accessoire1">handbags</option>
<option value="accessoire2">rings</option>
<option value="accessoire3">earrings</option></option>
<option value="accessoire3">scarves</option>

</select><br><br>

<label for="quantite">Quantité :</label>
<input type="number" id="quantite" name="quantite" min="1" required><br><br>

<label for="message">Message :</label><br>
<textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>

<input type="submit" value="Commander">
</form>
</div>
</body>
</html>
