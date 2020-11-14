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

    if ($requete = $mysqli->prepare("SELECT rendezvous.id AS numRendezVous, date, duree, TIME_FORMAT(heure, '%H:%i' ) as heure , animaux.nom AS nomAnimal, types.type AS typeAnimal, 
                                    CONCAT(proprietaires.prenom, ' ' , proprietaires.nom) AS nomProprietaire, proprietaires.telephone AS telephone, 
                                    CONCAT(veterinaires.prenom, ' ' , veterinaires.nom) AS nomVet, veterinaires.id 
                                    FROM rendezvous 
                                    INNER JOIN proprietaires ON rendezvous.id_proprietaire=proprietaires.id 
                                    INNER JOIN animaux ON rendezvous.id_animal=animaux.id 
                                    INNER JOIN types ON types.id=animaux.id_type 
                                    INNER JOIN veterinaires ON rendezvous.id_veterinaire=veterinaires.id 
                                    WHERE rendezvous.date>=CURRENT_DATE() and animaux.id=?
                                    ORDER by rendezvous.date, rendezvous.heure")) 
    {  // Création d'une requête préparée 

        $requete->bind_param("s", $_GET['id']); // Envoi des paramètres à la requête
        $requete->execute(); // Exécution de la requête
  
        $result = $requete->get_result(); // Récupération de résultats de la requête

        echo "<table class='mt-3 table table-striped w-auto'>";
        // Affichage de l'entête du tableau
          echo "<tr>";
          echo "<th>Rendez-vous</th>";
          echo "<th>Date</th>";
          echo "<th>Heure</th>";
          echo "<th>Durée</th>";
          echo "<th>Vétérinaire</th>";
          echo "<th>Propriétaire</th>";
          echo "<th>Téléphone</th>";
          echo "</tr>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
                              echo "<td> #" . $row["numRendezVous"] . "</td>";
                              echo "<td>" . $row["date"] . "</td>";
                              echo "<td>" . $row["heure"] . "h</td>";
                              echo "<td>" . clockalize($row["duree"]) . "</td>";
                              echo "<td>" . $row["nomVet"] . "</td>";
                              echo "<td>" . $row["nomProprietaire"] . "</td>";
                              echo "<td>" . $row["telephone"] . "</td>";
                            echo '</td>';
                            echo '</tr>';
        }
        echo "</table>";

        //$RV_VET = $result->fetch_assoc(); // Récupération de l'enregistrement
  
        //$RV_VET_JSON = json_encode($RV_VET);
        //echo $RV_VET_JSON;

        $requete->close(); // Fermeture du traitement 
    }
  
      $mysqli->close(); // Fermeture de la connexion 


      function clockalize($in){

        $heures = intval($in);
        $minutes = round((((($in - $heures) / 100.0) * 60.0) * 100), 0);

        if ($minutes === 60)
        {
          $heures++;
          $minutes = 0;
        }

        if ($heures === 0){
          $retval = sprintf("%02dmin", $minutes);
        } else {
          $retval = sprintf("%2d:%02dh", $heures, $minutes);
        }
        return $retval;
      }        

?>