<?php 
  include_once "config.php";
  include_once 'login.php';

?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSS -->
    <link rel="stylesheet" href="CSS/style.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

    <title>Clinique Vétérinaire</title>
  </head>
  <body>
  <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
  <a class="navbar-brand" href="index.php"><h2>CLINIQUE VÉTÉRINAIRE</h2></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item <?php if($page=='Accueil') echo 'active'; ?>">
        <a class="nav-link pl-5" href="index.php">Accueil</a>
      </li>
      <li class="nav-item <?php if($page=='Vétérinaires') echo 'active'; ?>">
        <a class="nav-link"  href="veterinaires.php">Vétérinaires</a>
      </li>
      <?php
            if(isset($_SESSION["utilisateur"])) {
              
          ?>     
      <li class="nav-item dropdown <?php if($page=='Animaux' || $page=='Rendez-vous' || $page=='Utilisateurs') echo 'active'; ?>">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Administration
        </a>
        <div class="dropdown-menu navbar-dark bg-primary" aria-labelledby="navbarDropdown">
          <div class=" <?php if($page=='Animaux') echo 'active'; ?>">
            <a class="nav-link" href="animaux.php">Animaux</a>
          </div>
         
          <div class="dropdown-divider"></div>
          <div class=" <?php if($page=='Rendez-vous') echo 'active'; ?>">
            <a class="nav-link" href="rendezVous.php">Rendez-Vous</a>
          </div>
          <div class="dropdown-divider"></div>
          <div class=" <?php if($page=='Utilisateurs') echo 'active'; ?>">
            <a class="nav-link " href="utilisateurs.php">Utilisateurs</a>
          </div>
        </div>
      </li>
      <?php
          }   
          ?>  
    </ul>
    <ul class="navbar-nav">   
          <?php
            if(!isset($_SESSION["utilisateur"])) {
              echo $messageErreurLogin;
          ?>      
            <li class="nav-item">  
              <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalConnexion">
                Connexion
              </button>
            </li>
          <?php
            } else {
          ?>
            <li class="nav-item mr-2 "> 
              <span class="text-white">Bonjour <u><?php echo $_SESSION["utilisateur"]; ?></u>!</span>   
            </li>
            <li class="nav-item">  
              <form method="POST">
                <button  type="submit" name="deconnexionSubmit" class=" btn btn-danger btn-sm">
                  Déconnexion
                </button>
              </form>
            </li>
          <?php
            }
  
          ?>
        </ul>
  </div>
</nav>

<?php
   if(isset($_POST['deconnexionSubmit'])) {    
     unset($_SESSION["utilisateur"]);    
     header('Location: index.php');    
     exit;  }

  include_once 'login/modals/login.php';
?>
