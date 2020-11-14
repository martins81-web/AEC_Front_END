<?php
  include_once 'config.php';
  session_start();
  // Vérification que l'action d'ajout a été soumise et que tous les champs sont présents
  if(isset($_POST['connexionSubmit']) && isset($_POST['utilisateur_login']) && isset($_POST['mot_de_passe_login'])) { 
    $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
    $mysqli->set_charset("utf8");
    if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
      echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
    } 
    if ($requete = $mysqli->prepare("SELECT mot_de_passe FROM utilisateurs WHERE utilisateur = ?")) {  // Création d'une requête préparée 
      
      $requete->bind_param("s", $_POST['utilisateur_login']); // Envoi des paramètres à la requête. 

      $requete->execute(); // Exécution de la requête
      $result = $requete->get_result(); // Récupération de résultats de la requête
      $utilisateur = $result->fetch_assoc(); // Récupération de l'enregistrement

      if(password_verify($_POST['mot_de_passe_login'], $utilisateur["mot_de_passe"])) {
        // Confirmer la connexion
        $_SESSION["utilisateur"] = $_POST['utilisateur_login'];
      } else {
        // Erreur de connexion
        $messageErreurLogin = '<li class="d-flex align-items-center nav-item mx-2 text-white">Erreur d\'authentification</li>';
      }

      $requete->close(); // Fermeture du traitement 
    } else {
      echo $requete->error;
    }

    $mysqli->close(); // Fermeture de la connexion 
  } 

  if(isset($_POST['deconnexionSubmit'])) {
    unset($_SESSION["utilisateur"]);
  }
?>