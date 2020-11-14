<?php include_once('include/header.php'); 


if(!isset($_SESSION["utilisateur"])) {
	echo '<h1 class="ml-5 mt-5" style="text-transform: uppercase;">Accès refusé !!!</h1>';
	echo '<h4 class="ml-5">Veuillez vous authentifier pour accéder à cette page</h4>';
  } else  {

	   // SECTION POUR LA SUPPRESSION

if (isset($_POST['supprSubmit']) && isset($_POST['id'])) {
	$mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
	$mysqli->set_charset("utf8");
	if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
		echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
	} 
	
	

	if ($requete = $mysqli->prepare("DELETE FROM nouvelles WHERE id=?")) {  // Création d'une requête préparée 
	
	  $requete->bind_param("i", $_POST['id']); // Envoi des paramètres à la requête. 

	  if($requete->execute()) { // Exécution de la requête
		$messageSuppr = "<div class='alert alert-success text-center'>Nouvelle supprimé!</div>";          
	  } else {
		$messageSuppr =  "<div class='alert alert-danger text-center'>Une erreur est survenue lors de la suppression.</div>";  
	  }

	  $requete->close(); // Fermeture du traitement
	} else  {
	  echo $mysqli->error;
	}
}

?>

  <!-- Page Content -->
  <div id='admin' class="container">
  
	<h1 class="my-4">Administration - Nouvelles</h1>
	
	<a href='ajout_nouvelle.php' type="button" class="btn btn-secondary text-white">Ajouter nouvelle</a>
	<!-- Cette section doit permettre de gérer (lister, ajouter, modifier et supprimer) des nouvelles. -->
	<?php
  	$res = $mysqli->query("SELECT * from nouvelles ORDER BY date_nouvelle DESC");
	  echo '<table class="table mt-4">';

	  // Affichage de l'entête du tableau
	  echo '<tr>';
	  echo '<th class="text-left">ID</th>';
	  echo '<th>Titre</th>';
	  echo '<th class="text-center">Date</th>';
	  echo '<th class="text-center">Status</th>';
	  	  // Nouveau ! Boutons d'action dans la dernière colonne
	  echo '<th class="text-center">Actions</th>';
	  echo '</tr>';
	  
	  while ($row = $res->fetch_assoc()) {
		  echo '<tr>';

		  echo '<td class="text-left">' . $row["id"] . '</td>';
		  echo '<td>' . $row["titre"] . '</td>';
		  echo '<td class="text-center">' . $row["date_nouvelle"] . '</td>';
		  if ($row["actif"]== 1) {
			echo '<td class="text-center">Active</td>';
		  } else {
			echo '<td class="text-center">Inactive</td>';
		  }
		  
		  
		  

		  // Nouveau ! Boutons d'action dans la dernière colonne
		  echo '<td class="text-center">';

		

			//bouton modifier
			echo '<a  href="MAJ_nouvelle.php?id='.$row['id'].'"  class="btn btn-default boutonMAJ" aria-label="Modifier la nouvelle" >';
			echo '<svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
			echo '<path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>';
			echo '<path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>';
			echo '</svg>';
			echo '</a>';


			// bouton supprimer
			echo '<a href="" class="btn btn-default boutonSupprimer" aria-label="Supprimer la nouvelle" data-toggle="modal" data-id="' . $row["id"] . '" data-target="#modalSuppr">';
			echo '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
			echo '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>';
			echo '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>';
			echo '</svg>';
			echo '</a>';

		  echo '</td>';
		  echo '</tr>';
	  }
	  echo '</table>';
	
    ?>


	<!-- Vous pouvez réaliser cette demande en utilisant plusieurs pages php (une pour l'ajout, une pour l'édition et une pour la suppression) ou utiliser des composants Modals -->
	<!-- Il doit être impossible d'accéder à cette page sans être préalablement connecté. Si un utilisateur non connecté essaie d'accéder à la page, un message d'erreur doit s'afficher -->
	
	
  </div>

    <!-- modal suppression nouvelle -->
	<div id="modalSuppr" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Suppression d'une nouvelle</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Voulez-vous vraiment supprimer cette nouvelle?</p>
        </div>
        <div class="modal-footer">
          <form method="POST">
            <input type="hidden" id="idNouvelleASupprimer" name="id">
            <button class="btn btn-danger" name="supprSubmit" type="submit">Oui</button>            
          </form>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
        </div>
      </div>
    </div>
  </div>

  



<?php
}
include_once('include/footer.php'); 

?>