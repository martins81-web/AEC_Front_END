<?php
        if (isset($_POST['supprSubmit']) && isset($_POST['id'])) {
        $message = '';
        $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
        if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
            echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
        } 
        
        if ($requete = $mysqli->prepare("DELETE FROM rendezvous WHERE id=?")) {  // Création d'une requête préparée 
          /************************* ATTENTION **************************/
          /* On ne fait présentement peu de validation des données.     */
          /* On revient sur cette partie dans les prochaines semaines!! */
          /**************************************************************/
          $requete->bind_param("i", $_POST['id']); // Envoi des paramètres à la requête. 
  
          if($requete->execute()) { // Exécution de la requête
            $messageSuppr = "<div class='alert alert-success text-center'>Rendez-vous supprimé!</div>";          
          } else {
            $messageSuppr =  "<div class='alert alert-danger text-center'>Une erreur est survenue lors de la suppression.</div>";  
          }
  
          $requete->close(); // Fermeture du traitement
        } else  {
          echo $mysqli->error;
        }
    
   
        $mysqli->close(); // Fermeture de la connexion 
      } 
 
?>