<?php
// Vérification que l'action d'ajout a été soumise et que tous les champs sont présents
  if(isset($_POST['ajoutSubmit']) && isset($_POST['utilisateur']) && isset($_POST['mot_de_passe']) && isset($_POST['courriel'])) { 
    $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
    if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
      echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
    } 
    
    if ($requete = $mysqli->prepare("INSERT INTO utilisateurs(utilisateur, mot_de_passe, courriel) VALUES(?, ?, ?)")) {  // Création d'une requête préparée 
      /************************* ATTENTION **************************/
      /* On ne fait présentement peu de validation des données.     */
      /* On revient sur cette partie dans les prochaines semaines!! */
      /**************************************************************/
      $requete->bind_param("sss", $_POST['utilisateur'], password_hash($_POST['mot_de_passe'], PASSWORD_DEFAULT), $_POST['courriel']); // Envoi des paramètres à la requête. 

      if($requete->execute()) { // Exécution de la requête
        $messageAjout = "<div class='alert alert-success text-center'>Utilisateur ajouté!</div>";  // Message ajouté dans la page en cas d'ajout réussi
      } else {
        $messageAjout =  "<div class='alert alert-danger text-center'>Une erreur est survenue lors de l'ajout.</div>";  // Message ajouté dans la page en cas d'ajout en échec
      }

      $requete->close(); // Fermeture du traitement
    } else  {
      echo $mysqli->error;
    }

    $mysqli->close(); // Fermeture de la connexion 
  } 
?>