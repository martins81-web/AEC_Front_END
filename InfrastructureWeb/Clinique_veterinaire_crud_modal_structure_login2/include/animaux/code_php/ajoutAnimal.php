<?php
    // Vérification que la page a été soumise et que tous les champs sont présents
    if(isset($_POST['nom']) && isset($_POST['dateDeNaissance']) && isset($_POST['id_type']) && isset($_POST['id_proprietairePriorite']))  {
      $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
      if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
        echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
      } 
    // Création d'une requête préparée
    if ($requete = $mysqli->prepare("INSERT INTO animaux (nom, dateDeNaissance, id_type, id_proprietairePriorite) VALUES(?, ?, ?, ?)")) {       

      /************************* ATTENTION **************************/
      /* On ne fait présentement peu de validation des données.     */
      /* On revient sur cette partie dans les prochaines semaines!! */
      /**************************************************************/

      $requete->bind_param("ssii", $_POST['nom'], $_POST['dateDeNaissance'], $_POST['id_type'], $_POST['id_proprietairePriorite']);

      if($requete->execute()) { // Exécution de la requête
          $messageAjout = "<div class='alert alert-success text-center'>Animal ajouté</div>";  // Message ajouté dans la page en cas d'ajout réussi
      } else {
        $messageAjout =  "<div class='alert alert-danger text-center'>Une erreur est survenue lors de l'ajout.</div>";  // Message ajouté dans la page en cas d’échec
      }
      $requete->close(); // Fermeture du traitement
    } else  {
      echo $mysqli->error;
    }
    $mysqli->close(); // Fermeture de la connexion
  }
?>
