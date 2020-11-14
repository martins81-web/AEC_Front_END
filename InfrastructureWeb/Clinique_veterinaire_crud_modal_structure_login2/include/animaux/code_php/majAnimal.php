<?php

// Vérification que la page a été soumise et que tous les champs sont présents
if(isset($_POST['nom_mod']) && isset($_POST['dateDeNaissance_mod']) && isset($_POST['id_type_mod']) && isset($_POST['id_proprietairePriorite_mod']))  {
  $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
  if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
      echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
  } 
  
  if ($requete = $mysqli->prepare("UPDATE animaux SET nom=?, dateDeNaissance=?, id_type=?, id_proprietairePriorite=? WHERE id=?")) {  // Création d'une requête préparée 
    /************************* ATTENTION **************************/
    /* On ne fait présentement peu de validation des données.     */
    /* On revient sur cette partie dans les prochaines semaines!! */
    /**************************************************************/
    $requete->bind_param("ssiii", $_POST['nom_mod'], $_POST['dateDeNaissance_mod'], $_POST['id_type_mod'], $_POST['id_proprietairePriorite_mod'], $_POST['id_mod']); // Envoi des paramètres à la requête. 

    if($requete->execute()) { // Exécution de la requête
      $messageMAJ = "<div class='alert alert-success text-center'>Animal mis à jour</div>";  // Message ajouté dans la page en cas d'ajout réussi
    } else {
      $messageMAJ =  "<div class='alert alert-danger text-center'>Une erreur est survenue lors de la mise à jour.</div>";  // Message ajouté dans la page en cas d'ajout en échec
    }

    $requete->close(); // Fermeture du traitement
  } else  {
    echo $mysqli->error;
  }

  $mysqli->close(); // Fermeture de la connexion 

} 
?>