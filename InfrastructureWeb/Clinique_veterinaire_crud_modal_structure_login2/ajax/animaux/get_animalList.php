 <?php
    header('Content-Type: application/json');
    
    include_once '../../include/config.php'; 

    //$var1 = $_GET["propID"];
    //$var2 = $_GET["animalID"];
    //echo 'You passed  ' . $var1 . ' and ' . $var2 .  ' to the php server';
    
    if(!isset($_GET['propID']) || !isset($_GET['animalID'])) { // Vérification que la page reçoit un identifiant en paramètre
      echo 'Identifiant manquant';
      exit();
    }

    $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
    if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
      echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
      exit();
    } 

    if ($requete = $mysqli->prepare("SELECT * FROM animaux where id_proprietairePriorite=?")) {  // Création d'une requête préparée 

      $requete->bind_param("i", $_GET['propID']); // Envoi des paramètres à la requête
      $requete->execute(); // Exécution de la requête

      $result = $requete->get_result(); // Récupération de résultats de la requête
      while ($row = $result->fetch_assoc()) {
        if( $row['id'] == $_GET['animalID'])  {
            echo "<option selected value='$row[id]'>$row[nom]</option>";
        }
        else{
            echo "<option value='$row[id]'>$row[nom]</option>";
        }
      }

      $requete->close(); // Fermeture du traitement 
    }

    $mysqli->close(); // Fermeture de la connexion 
?>