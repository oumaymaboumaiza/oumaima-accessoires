<?php 
include 'db_connect.php';
print_r($_GET);

$is_location = isset($_GET['location']) and $_GET['location'] != '';
$is_search = isset( $_GET['search']) and $_GET['search'] != '';


if ($is_location && $is_search){
   // search and filter;
  $location = $_GET['location'];
  $search = $_GET['search'];
  $sql = "SELECT * FROM `services` WHERE `location` = '$location' AND `title` LIKE '%$search%';";

}elseif ($is_location){
  // filter
  $location = $_GET['location'];
  $sql = "SELECT * FROM `services` WHERE `location` ='$location';";
}elseif ($is_search){
  // search
  $search = $_GET['search'];
  $sql = "SELECT * FROM `services` WHERE `title` LIKE '%$search%';";
}else {
  // show all products
  $sql = "SELECT * FROM `services`";
}

$result = $conn->query($sql);

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services</title> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> 

    <link rel="stylesheet" href="Services.css"/> 
</head>
<body>
    
  <body style="font-family:Verdana;"> 
    <nav class="navbar navbar-expand-lg bg-body-tertiary" align="center">
      <div class="container-fluid">
        <a class="navbar-brand" href="Juge.css"> </a> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="services.php">Services </a>
              <ul class="dropdown-menu"></ul>
            <li class="nav-item">
              <a class="nav-link" href="Blog.html">Blog </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Contact.php">Contact </a> 

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </a>

              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="our work.html"> Our work</a></li>
                <li><a class="dropdown-item" href="help.html">Help</a></li>
              </ul>
            </li>
           
          </ul> 
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div> 
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="juge.jpg" class="Element style" alt="juge 2.jpg">
        </div>
        <div class="carousel-item">
          <img src="juge.jpg" class="Element style" alt="besniss.jpg">
        </div>
        <div class="carousel-item">
          <img src="juge.jpg" class="Element style" alt="juge.jpg">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden" color="black">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>   
      <div data-bs-theme="dark">
        <button type="button" class="btn-close" aria-label="Close"></button>
        <button type="button" class="btn-close" disabled aria-label="Close"></button>
      </div>
    </div>
    <center>
      <button type="button" class="btn btn-primary">Discover the team</button>
    </center>
    <form actio="." method="GET">
      <div class="mb-3">
        <label for="search" class="form-label">Search</label>
        <input type="text" name ="search" class="form-control" id="search">
      </div>
      <div class="mb-3">
        <label for="location" class="form-label">Location</label>
        <input type="text" name="location" class="form-control" id="location">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="row mt-5">
      <?php 
        if ($result->num_rows > 0) {
          // output data of each row
          while($row = $result->fetch_assoc()) {
         ?>
         
      <div class="col-sm-6 mt-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-row mb-3">
              <img src="<?= $row["image_src"] ?>" width="48%" height="48%" alt="<?= $row["title"] ?>"/>
              <div> 
                <h3 class="card-title"><?= $row["title"] ?> </h3>
                <p class="card-text"><?= $row["description"] ?></p>     
              </div>
            </div>
            <button type="button" class="btn btn-dark">See more</button>
          </div>
        </div>
      </div>
         
         
         <?php }
        } else {
          echo "0 results";
        }
      ?>
    </div>
</body>
</html>


<?php
$conn->close();
?>