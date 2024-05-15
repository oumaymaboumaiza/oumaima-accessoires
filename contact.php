<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "oumaima-accessoires";
// check the request method
// if POST request  afficher handle contact submit
$error = "";
$success = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  // get post data
  $f_name = $_POST['f_name'];
  $l_name = $_POST['l_name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  
  // Validate post data - all fields are required
  if (empty($f_name) || empty($l_name) || empty($email) || empty($subject) || empty($message)) {
      // If any field is empty, display an error message
      // if post data is not valid > show error message to the user
      $error = "All fields are required. Please fill in all the fields.";
  } else {
    // check if user exists in the database:
    // Prepare a statement to select the user ID based on the provided email
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    
    // Get the result
    $result = $stmt->get_result();
    
    // Fetch the row
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // User exists, get the user ID
        $user_id = $row['id'];
    } else {
      // User does not exist, create a new user
      $stmt_insert = $conn->prepare("INSERT INTO users (nom, l_name, email) VALUES (?, ?, ?)");
      $stmt_insert->bind_param("sss", $f_name, $l_name, $email);
      if ($stmt_insert->execute()) {
          // User created successfully, get the ID of the new user
          $user_id = $stmt_insert->insert_id;
      } else {
          echo "Error creating user: " . $conn->error;
      }
      // Close the statement
      $stmt_insert->close();
    }
    $stmt->close();

    // Insert contact data into the contact table
    $stmt_contact = $conn->prepare("INSERT INTO contact (user_id, subject, message) VALUES (?, ?, ?)");
    $stmt_contact->bind_param("iss", $user_id, $subject, $message);

    if ($stmt_contact->execute()) {
      // succes message
      $success = "contact sent";
    } else {
        echo "Error inserting contact data: " . $conn->error;
    }

    
  }
  $conn->close();
}

?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <form action="contact.php" method="POST" class="needs-validation" novalidate>
        <?php if ($error != "") {?>
        <div class="alert alert-danger" role="alert">
          <?= $error ?>
        </div>
        <?php } ?>
        <?php if ($success != "") {?>
        <div class="alert alert-success" role="alert">
          <?= $success ?>
        </div>
        <?php } ?>
        <div class="mb-3">
            <label for="f_name" class="form-label">First name</label>
            <input name="f_name" type="text" class="form-control" id="f_name" required>
            <div class="valid-feedback">
                Looks good!
            </div>
            <div class="invalid-feedback">
              First name field is required
            </div>
        </div>
        <div class="mb-3">
            <label for="l_name" class="form-label">Last name</label>
            <input name="l_name" type="text" class="form-control" id="l_name" required>
            <div class="valid-feedback">
                Looks good!
            </div>
            <div class="invalid-feedback">
                Error field
            </div>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input name="email" type="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <input name="subject" type="text" class="form-control" id="subject" required>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea name="message" class="form-control" id="message" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
</script>
  </body>
</html>