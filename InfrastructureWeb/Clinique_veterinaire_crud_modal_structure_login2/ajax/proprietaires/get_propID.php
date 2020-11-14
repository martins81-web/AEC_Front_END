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

    if ($requete = $mysqli->prepare("SELECT * FROM proprietaires")) {  // Création d'une requête préparée 

      $requete->execute(); // Exécution de la requête

      $result = $requete->get_result(); // Récupération de résultats de la requête
      while ($row = $result->fetch_assoc()) {
            if($row['id'] == $_GET['id'] )
                echo "<option selected value='$row[id]'>$row[prenom] $row[nom]</option>";
            else 
                echo "<option  value='$row[id]'>$row[prenom] $row[nom]</option>";
      }

      $requete->close(); // Fermeture du traitement 
    }

    $mysqli->close(); // Fermeture de la connexion 
?>