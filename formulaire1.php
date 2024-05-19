<?php
// la Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "oumaima-accessoires";


try {
$conn = new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);
$conn->setAttribute(PDO::ATTER_ERRMODE, PDO::ERRMODE_EXCEPTION);
//echo "la connexion a ete bien eatblie";
}

catch(PDOException $e){
    echo "a connexion a echoue: " . $e->getMessage();
}

if (isset($_post['Commander']))
{
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $telephone = $_POST['telephone'];
    $adresse = $_POST['adresse'];
    $quantite = $_POST['quantite'];
    $produit = $_POST['produit'];

    $sql=("INSERT INTO `formulaire`(`nom`, `email`, `message`, `telephone`, `adresse`, `quantity`, `produit`) VALUES(:nom, :email, :message, :telephone, :adresse, : quantity, :produit)";
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':nom', $nom);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':message', $message);
    $stmt->bindParam(':telephone', $telephone);
    $stmt->bindParam(':adresse', $adresse);
    $stmt->bindParam(':quantity', $quantity);
    $stmt->bindParam(':produit', $produit);
    $stmt->execute();
}


// Fermeture de la connexion
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>laire de Commande</title>
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
    <h1>formulaire de Commande</h1>
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
                <option value="handbags">handbags</option>
                <option value="rings">rings</option>
                <option value="earrings">earrings</option>
                <option value="scarves">scarves</option>

            </select><br><br>

            <label for="quantity">quantity :</label>
            <input type="number" id="quantity" name="quantity" min="1" required><br><br>

            <label for="message">Message :</label><br>
            <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>

            <input type="submit" value="Commander">
        </form>
    </div>
</body>

</html>