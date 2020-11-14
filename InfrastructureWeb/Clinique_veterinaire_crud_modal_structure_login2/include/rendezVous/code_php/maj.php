 <?php
      // Vérification que la page a été soumise et que tous les champs sont présents
      if(isset($_POST['heure']) && isset($_POST['date']) && isset($_POST['duree']) && isset($_POST['id_vetMod']) && isset($_POST['id_proprietairePriorite_mod'])&& isset($_POST['id_animal']))  {
        $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
        if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
            echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
        } 
        
        if ($requete = $mysqli->prepare("UPDATE rendezvous SET heure=?, date=?, duree=?, id_veterinaire=?, id_proprietaire=?, id_animal=?   WHERE id=?")) {  // Création d'une requête préparée 
          /************************* ATTENTION **************************/
          /* On ne fait présentement peu de validation des données.     */
          /* On revient sur cette partie dans les prochaines semaines!! */
          /**************************************************************/
          $requete->bind_param("sssiiii", $_POST['heure'], $_POST['date'], $_POST['duree'], $_POST['id_vetMod'], $_POST['id_proprietairePriorite_mod'], $_POST['id_animal'], $_POST['id_mod']); // Envoi des paramètres à la requête. 
      
          if($requete->execute()) { // Exécution de la requête
            $messageMAJ = "<div class='alert alert-success'>Rendez-vous mis à jour</div>";  // Message ajouté dans la page en cas d'ajout réussi
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