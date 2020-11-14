<?php
if (isset($_POST['supprSubmit']) && isset($_POST['id'])) {
        $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
        if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
            echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
        } 
          
        $count = $mysqli->query("SELECT COUNT(*) FROM utilisateurs");
        $row = $count->fetch_assoc();

        if ($row["COUNT(*)"]>1){
        if ($requete = $mysqli->prepare("DELETE from utilisateurs where id=?")) {  
          // Création d'une requête préparée 
          /************************* ATTENTION **************************/
          /* On ne fait présentement peu de validation des données.     */
          /* On revient sur cette partie dans les prochaines semaines!! */
          /**************************************************************/
          $requete->bind_param("i", $_POST['id']); // Envoi des paramètres à la requête. 
  
          if($requete->execute()) { // Exécution de la requête
            $messageSuppr = "<div class='alert alert-success text-center'>Utilisateur supprimé!</div>";          
          } else {
            $messageSuppr =  "<div class='alert alert-danger text-center'>Une erreur est survenue lors de la suppression.</div>";  
          }
  
          $requete->close(); // Fermeture du traitement
        } else  {
          echo $mysqli->error;
        }
      } else {
        $messageSuppr =  "<div class='alert alert-danger text-center'>Vous ne pouvez pas supprimer le dernier utilisateur!</div>"; 
      }
   
        $mysqli->close(); // Fermeture de la connexion 
      } 
    
?>