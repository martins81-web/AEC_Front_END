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

    if ($requete = $mysqli->prepare("SELECT rendezvous.id AS numRendezVous, date, duree, Cast(heure AS time) AS heure, animaux.nom AS nomAnimal, types.type AS typeAnimal, 
    CONCAT(proprietaires.prenom, ' ' , proprietaires.nom) AS nomProprietaire, proprietaires.telephone AS telephone, proprietaires.id AS propID,
    CONCAT(veterinaires.prenom, ' ' , veterinaires.nom) AS nomVet, veterinaires.id As vetID, animaux.id AS animalID FROM rendezvous 
    INNER JOIN proprietaires ON rendezvous.id_proprietaire=proprietaires.id 
    INNER JOIN animaux ON rendezvous.id_animal=animaux.id
    INNER JOIN types ON types.id=animaux.id_type 
    INNER JOIN veterinaires ON rendezvous.id_veterinaire=veterinaires.id 
    WHERE rendezvous.id=?")) {  // Création d'une requête préparée 

        $requete->bind_param("s", $_GET['id']); // Envoi des paramètres à la requête
        $requete->execute(); // Exécution de la requête
  
        $result = $requete->get_result(); // Récupération de résultats de la requête
        $rendezvous = $result->fetch_assoc(); // Récupération de l'enregistrement
  
        $rendezvousJSON = json_encode($rendezvous);
        echo $rendezvousJSON;

        $requete->close(); // Fermeture du traitement 
      }
  
      $mysqli->close(); // Fermeture de la connexion 

?>