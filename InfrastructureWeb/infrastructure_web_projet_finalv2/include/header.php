<?php 
 include_once "include/config.php";
 include_once 'login.php';
 $mysqli = new mysqli($host, $username, $password, $database);
 $mysqli->set_charset("utf8");
 // Vérifier la connexion
 if ($mysqli -> connect_errno) {
   echo "Échec de connexion à la base de données MySQL: " . $mysqli -> connect_error;
   exit();
 } 
 date_default_timezone_set('America/New_York');



?>

<!DOCTYPE html>
<html lang="fr-CA">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Projet Final - Infrastructure Web - Eric Martins</title>

  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

  <!-- Custom styles for this template -->
  <link href="css/modern-business.css" rel="stylesheet">

</head>

<body>

  <!-- Navigation -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="index.php">Accueil</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="enonce.php">Énoncé</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Nouvelles
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
          <?php
              $res = $mysqli->query("SELECT * FROM categories");
              while ($row = $res->fetch_assoc()) {
                echo '<a class="dropdown-item" href="nouvelles_categorie.php?id='.$row['id'].'">'.$row["categorie"].'</a>';
              }
            ?>
			  <a class="dropdown-item" href="nouvelles.php">Toutes les nouvelles</a>
            </div>
          </li>
		  <li class="nav-item">
            <a class="nav-link" href="module_personnel.php">Module personnel</a>
          </li>
		  
      <!-- Le menu Administration doit s'afficher seulement lorsque l'utilisateur est connecté !-->
      <?php
            if(isset($_SESSION["utilisateur"])) {
          ?>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Administration
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPages">
              <a class="dropdown-item" href="administration_nouvelles.php">Nouvelles</a>
            </div>
          </li>
          <?php
            }
          ?>

        <?php
            if(!isset($_SESSION["utilisateur"])) {
              ?> 	 
            <li class="nav-item">  
            <button class="btn btn-outline-info my-2 my-sm-0" data-toggle="modal" data-target="#modalConnexion">Connexion</button>	
            <?php
              echo $messageErreurLogin;
          ?> 				
            </li>
          <?php
            } else {
          ?>
            
            <li class="nav-item">  
              <form method="POST">
              <button type='submit' class="btn btn-outline-danger my-2 my-sm-0" name="deconnexionSubmit" >Déconnexion</button>					
              </form>
            </li>
            <li class="nav-item mx-2 d-flex align-items-center"> 
              <span class="text-white">Hello! <u><?php echo $_SESSION["utilisateur"]; ?></u></span>   
            </li>
          <?php
            }
          ?>
        </ul>
      </div>
    </div>
  </nav>
  
  <?php
 if(isset($_POST['deconnexionSubmit'])) {    
  unset($_SESSION["utilisateur"]);    
  header('Location: index.php');    
  exit;  }
  ?>

<!-- Formulaire de connexion -->
<div class="modal fade" id="modalConnexion" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Connexion</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form method="POST">
        <div class="modal-body">
          <div class="form-group">
            <input class="form-control" type="text" placeholder="Utilisateur" name="utilisateur_login" required>
            <br>
            <input class="form-control" type="password" placeholder="Mot de passe" name="mot_de_passe_login" required>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary" name="connexionSubmit">Connexion</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button> 
        </div>
      </form>
    </div>
  </div>
</div>

