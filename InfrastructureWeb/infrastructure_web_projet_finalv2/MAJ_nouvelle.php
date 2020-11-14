<?php include_once('include/header.php'); 

if(!isset($_SESSION["utilisateur"])) {
	echo '<h1 class="ml-5 mt-5" style="text-transform: uppercase;">Accès refusé !!!</h1>';
	echo '<h4 class="ml-5">Veuillez vous authentifier pour accéder à cette page</h4>';
  } else  {

   // SECTION POUR LA MISE À JOUR

   $messageMAJ = '';

   // Vérification que la page a été soumise et que tous les champs sont présents
   if(isset($_POST['date']) && isset($_POST['categorie_mod']) && isset($_POST['status_mod']) && isset($_POST['titre_mod']) && isset($_POST['DC_mod']) && isset($_POST['DL_mod'])) { 
     $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
     $mysqli->set_charset("utf8");
     if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
         echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
     } 
     
     if ($requete = $mysqli->prepare("UPDATE nouvelles SET titre=?, description_courte=?, description_longue=?, fk_categorie=?, actif=?, date_nouvelle=? WHERE id=?")) {  // Création d'une requête préparée 
       /************************* ATTENTION **************************/
       /* On ne fait présentement peu de validation des données.     */
       /* On revient sur cette partie dans les prochaines semaines!! */
       /**************************************************************/
       
       $requete->bind_param("sssiisi", $_POST['titre_mod'], $_POST['DC_mod'], $_POST['DL_mod'], $_POST['categorie_mod'], $_POST['status_mod'], $_POST['date'], $_POST['id_mod']); // Envoi des paramètres à la requête. 

       if($requete->execute()) { // Exécution de la requête
         $messageMAJ = "<div class='alert alert-success'>Nouvelle mise à jour</div>";  // Message ajouté dans la page en cas d'ajout réussi
       } else {
         $messageMAJ =  "<div class='alert alert-danger'>Une erreur est survenue lors de la mise à jour.</div>";  // Message ajouté dans la page en cas d'ajout en échec
       }

       $requete->close(); // Fermeture du traitement
     } else  {
       echo $mysqli->error;
     }
 
     $mysqli->close(); // Fermeture de la connexion 
 
   } 
// SECTION POUR L'AFFICHAGE
if(!isset($_GET['id'])) { // Vérification que la page reçoit un identifiant en paramètre
    echo 'Identifiant manquant';
    exit();
  }

  $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
  $mysqli->set_charset("utf8");
  if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
      echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
      exit();
  } 

  if ($requete = $mysqli->prepare("SELECT * FROM nouvelles WHERE id=?")) {  // Création d'une requête préparée 
    $requete->bind_param("s", $_GET['id']); // Envoi des paramètres à la requête
    $requete->execute(); // Exécution de la requête

    $result = $requete->get_result(); // Récupération de résultats de la requête
    $nouvelle = $result->fetch_assoc(); // Récupération de l'enregistrement

    $requete->close(); // Fermeture du traitement 
  }

  $mysqli->close(); // Fermeture de la connexion 
?>

<!-- Page Content -->
<?php echo $messageMAJ ?>

<div id='edit' class='container' >
	<!-- form MAJ nouvelle -->
    <form class="needs-validation" novalidate method="POST">
    	<h1 class="my-4">Modifier la nouvelle</h1>
            <div class="form-row">

            <div class="col-4 mb-3">
                    <label for="code">Date *</label>
                    <input type="hidden" id="id_MAJ" name="id_mod" value="<?= $nouvelle["id"] ?>">
					<!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
					<input type="date" class="form-control" id="date_MAJ" name="date" value="<?= $nouvelle["date_nouvelle"] ?>" required maxlength="50">
					<div class="invalid-feedback">
						La data est requise. 
					</div>
                </div>

            <div class="col-4 mb-3">
					<label for="code">Categorie *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <select class="form-control" id="categorie_MAJ" name="categorie_mod">
                    <?php 
                    $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
                    $mysqli->set_charset("utf8");
                    if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
                        echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
                        exit();
                    } 
                        $res = $mysqli->query("SELECT * from categories");
                        while ($categorie = $res->fetch_assoc()) {
                            if ($nouvelle["fk_categorie"]==$categorie["id"]) {
                            echo "<option selected value='$categorie[id]'>$categorie[categorie]</option>";
                            } else {
                            echo "<option  value='$categorie[id]'>$categorie[categorie]</option>";
                            }
                        }
                    $mysqli->close(); // Fermeture de la connexion 
                    ?>
                    </select>
					<div class="invalid-feedback">
						La categorie est requise.  
					</div>
                </div>
                
				<div class="col-4 mb-3">
					<label for="code">Status *</label>
					<!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
					<select class="form-control" id="status_MAJ" name="status_mod" >
                        <?php 
                        if ($nouvelle["actif"]) {
                            echo "<option selected value='1'>Active</option>";
                            echo "<option value='0'>Inactive</option>";

                        } else {
                            echo "<option value='1'>Active</option>";
                            echo "<option selected value='0'>Inactive</option>";
                        }
                        
                        ?>
					</select>
					<div class="invalid-feedback">
						Le status est requis.  
					</div>
                </div>

				<div class="col-12 mb-3">
					<label for="code">Titre *</label>
					<!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
					
					<input type="text" class="form-control" id="titre_MAJ" name="titre_mod" value="<?= $nouvelle["titre"] ?>" required maxlength="50">
					<div class="invalid-feedback">
						Le titre est requis et doit comporter au maximum 50 caractères. 
					</div>
                </div>
                
                

				<div class="col-12 mb-3">
					<label for="DC_MAJ">Description courte *</label>
					<!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
					<input type="text" class="form-control" id="DC_MAJ" name="DC_mod" value="<?= $nouvelle["description_courte"] ?>" required maxlength="125">
					<div class="invalid-feedback">
						La description courte est requise. 
					</div>
            	</div>
          </div>
          <div class="form-row">
          	<div class="col-12 mb-3">
              <label for="DL_MAJ">Description longue *</label>
              <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
              <textarea class="form-control" id="DL_MAJ" name="DL_mod"  rows="8" required ><?= $nouvelle["description_longue"] ?></textarea>

              <div class="invalid-feedback">
			  		La description longue est requise. 
              </div>
            </div>
          </div>        
            <button type="submit" class="btn btn-primary">Sauvegarder</button>
            <a href="administration_nouvelles.php" class="float-right">Retour à la liste des nouvelles</a>
    </form>
</div>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>

<?php } include_once('include/footer.php'); ?>