<?php
    header('Content-Type: application/json');
    
    include_once '../../include/config.php'; 
    
    if(!isset($_GET['id'])) { // Vérification que la page reçoit un identifiant en paramètre
      echo 'Identifiant manquant';
      exit();
    }

    $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
    if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
      echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
      exit();
    } 

    if ($requete = $mysqli->prepare("SELECT id,utilisateur,courriel from utilisateurs WHERE id=?")) {  // Création d'une requête préparée 

        $requete->bind_param("s", $_GET['id']); // Envoi des paramètres à la requête
        $requete->execute(); // Exécution de la requête
  
        $result = $requete->get_result(); // Récupération de résultats de la requête
        $animal = $result->fetch_assoc(); // Récupération de l'enregistrement
  
        $animalJSON = json_encode($animal);
        echo $animalJSON;

        $requete->close(); // Fermeture du traitement 
      }
  
      $mysqli->close(); // Fermeture de la connexion 

?>