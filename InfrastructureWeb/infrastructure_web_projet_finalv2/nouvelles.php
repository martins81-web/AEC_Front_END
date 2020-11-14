<?php 
include_once('include/header.php'); 
?>

  <!-- Page Content -->
  <div class="container">
  
	<h1 class="my-4">Toutes les nouvelles</h1>
  <!-- Afficher la liste de toutes nouvelles ACTIVES en ordre chronologique (de la plus récente à la plus ancienne) -->
  <?php
  $res = $mysqli->query(" SELECT * from nouvelles where actif=1 ORDER BY date_nouvelle DESC");
  while ($row = $res->fetch_assoc()) {
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

    ?>

  <div class='mt-5'>
    <a  href="index.php" >Retour à l'accueil</a>
	<!-- L'affichage doit être le même que celui utilisé pour l'affichage des nouvelles par catégorie -->
	</div>
  </div>

<?php include_once('include/footer.php'); ?>

</html>

