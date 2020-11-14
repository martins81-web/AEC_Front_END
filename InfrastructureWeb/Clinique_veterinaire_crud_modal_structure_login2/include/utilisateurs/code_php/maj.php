<?php
// Vérification que la page a été soumise et que tous les champs sont présents
    if(isset($_POST['ajoutSubmit']) && isset($_POST['utilisateur_MAJ']) && isset($_POST['mot_de_passe_MAJ']) && isset($_POST['courriel_MAJ']))  {
      $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
      if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
          echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
      } 
      
      if ($requete = $mysqli->prepare("UPDATE utilisateurs SET utilisateur=?, mot_de_passe=?, courriel=?  WHERE id=?")) {  // Création d'une requête préparée 
        /************************* ATTENTION **************************/
        /* On ne fait présentement peu de validation des données.     */
        /* On revient sur cette partie dans les prochaines semaines!! */
        /**************************************************************/
        $requete->bind_param("sssi", $_POST['utilisateur_MAJ'], password_hash($_POST['mot_de_passe_MAJ'], PASSWORD_DEFAULT), $_POST['courriel_MAJ'], $_POST['id_MAJ']); // Envoi des paramètres à la requête. 
    
        if($requete->execute()) { // Exécution de la requête
          $messageMAJ = "<div class='alert alert-success'>Utilisateur mis à jour</div>";  // Message ajouté dans la page en cas d'ajout réussi
        } else {
          $messageMAJ =  "<div class='alert alert-danger'>Une erreur est survenue lors de la mise à jour.</div>";  // Message ajouté dans la page en cas d'ajout en échec
        }
    
        $requete->close(); // Fermeture du traitement
      } else  {
        echo $mysqli->error;
      }
    
      $mysqli->close(); // Fermeture de la connexion 
    
    } 
    ?>