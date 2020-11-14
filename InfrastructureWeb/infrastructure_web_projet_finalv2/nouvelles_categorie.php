<?php include_once('include/header.php'); 
if(!isset($_GET['id'])) { // Vérification que la page reçoit un identifiant en paramètre
  echo 'Identifiant manquant';
  exit();
}

if ($requete = $mysqli->prepare("SELECT * FROM categories WHERE id=?")) {  // Création d'une requête préparée 
  $mysqli->set_charset("utf8");
  $requete->bind_param("s", $_GET['id']); // Envoi des paramètres à la requête
  $requete->execute(); // Exécution de la requête
  
  $result = $requete->get_result(); // Récupération de résultats de la requête
  $categorie = $result->fetch_assoc(); // Récupération de l'enregistrement
  $requete->close(); // Fermeture du traitement     
 }    
?>


  <!-- Page Content -->
  <div class="container">
  
  <h1 class="my-4"><?php echo $categorie["categorie"]; ?></h1>

	<!-- Afficher la liste de toutes nouvelles ACTIVES appartenant à la catégorie sélectionnée en ordre chronologique (de la plus récente à la plus ancienne) -->
  <!-- L'affichage est à votre discrétion -->
  <?php
              $res = $mysqli->prepare(" SELECT * from nouvelles where actif=1 AND fk_categorie=? ORDER BY date_nouvelle DESC");
              $mysqli->set_charset("utf8");
              $res->bind_param("s", $_GET['id']); // Envoi des paramètres à la requête
              $res->execute(); // Exécution de la requête
              $result = $res->get_result(); // Récupération de résultats de la requête
                while ($row = $result->fetch_assoc()) {
                    echo '<div class="row borderBottom py-3">';
                    echo '<div class="col-8">';
                    echo '<h4 class="">'.$row["titre"].'</h4>';
                    echo '</div>';
                    echo '<div class="col-4 text-right">';
                    echo '<h6 class="red">'.$row["date_nouvelle"].'</h6>';
                    echo '</div>';
                    echo '<div class="col-8">';
                    echo '<p class="italic">'.$row["description_courte"].'</p>';
                    echo '</div>';
                    echo '<div class="col-4 text-right">';
                    echo '<a class="m-0 p-0" href="nouvelle.php?id='.$row['id'].'">Plus d´information</a>';
                    echo '</div>';
                    echo '</div>';
                }
              
              $mysqli->close(); // Fermeture de la connexion 
              
            ?>
      <div class='mt-5'>
            <a  href="index.php" >Retour à l'accueil</a>
	    </div>
  
  </div>



<?php include_once('include/footer.php'); ?>

