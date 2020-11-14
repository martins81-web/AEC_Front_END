<?php

   // Vérification que la page a été soumise et que tous les champs sont présents
   if(isset($_POST['ajoutSubmitProp']) && isset($_POST['nomProp']) && isset($_POST['prenomProp']) && isset($_POST['adresse']) && isset($_POST['telephone'])) {
    $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
    if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
      echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
    } 
     // Création d'une requête préparée
     if ($requete = $mysqli->prepare("INSERT INTO proprietaires (nom,prenom,adresse,telephone) VALUES(?,?,?,?)")) {      

/************************* ATTENTION **************************/
       /* On ne fait présentement peu de validation des données.     */
       /* On revient sur cette partie dans les prochaines semaines!! */
       /**************************************************************/

       $requete->bind_param("ssss", $_POST['nomProp'], $_POST['prenomProp'], $_POST['adresse'], $_POST['telephone']);

       if($requete->execute()) { // Exécution de la requête
           $messageAjout = "<div class='alert alert-success text-center'>Propriétaire ajouté</div>";  // Message ajouté dans la page en cas d'ajout réussi
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