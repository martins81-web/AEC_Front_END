<?php 

include_once('include/header.php'); 


    if(!isset($_GET['id'])) { // Vérification que la page reçoit un identifiant en paramètre
       echo 'Identifiant manquant';
       exit();
     }
 
     if ($requete = $mysqli->prepare("SELECT * FROM nouvelles WHERE id=?")) {  // Création d'une requête préparée 
 
       $requete->bind_param("s", $_GET['id']); // Envoi des paramètres à la requête
       $requete->execute(); // Exécution de la requête
       
       $result = $requete->get_result(); // Récupération de résultats de la requête
       $nouvelle = $result->fetch_assoc(); // Récupération de l'enregistrement
       $requete->close(); // Fermeture du traitement     
      }    
?>


	<div class="container">
        <?php
        echo '<div class="mt-4">';
        echo '<h1>' . $nouvelle["titre"] . '</h1>';
        echo '<p class="red">' . $nouvelle["date_nouvelle"] . '</p>';
        echo '<br>';
        echo '<h5 class="mb-2 italic">' . $nouvelle["description_courte"]  . '</h4>';
        echo '<br>';
        echo '<h4 class="mb-5 ">' . $nouvelle["description_longue"]  . '</h3>';
        echo '</div>';
        ?>
        <div class='mt-5'>
            <a  href="index.php" >Retour à l'accueil</a>
	    </div>
	</div>

    <?php include_once('include/footer.php'); ?>
