<?php 

include_once('include/header.php'); 

if(!isset($_SESSION["utilisateur"])) {
	echo '<h1 class="ml-5 mt-5" style="text-transform: uppercase;">Accès refusé !!!</h1>';
	echo '<h4 class="ml-5">Veuillez vous authentifier pour accéder à cette page</h4>';
  } else  {

 $messageAjout = '';
 // Vérification que la page a été soumise et que tous les champs sont présents
 if(isset($_POST['titre']) && isset($_POST['DC']) && isset($_POST['DL']) && isset($_POST['categorie']) && isset($_POST['status']) && isset($_POST['date'])) {
   $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
   $mysqli->set_charset("utf8");
   if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
       echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
   }

     // Création d'une requête préparée
   if ($requete = $mysqli->prepare("INSERT INTO nouvelles(titre, description_courte	, description_longue, fk_categorie, actif, date_nouvelle) VALUES(?, ?, ?, ?, ?, ?)")) {      

     $requete->bind_param("sssiis", $_POST['titre'], $_POST['DC'], $_POST['DL'], $_POST['categorie'], $_POST['status'], $_POST['date']); 
     if($requete->execute()) { // Exécution de la requête
         $messageAjout = "<div class='alert alert-success'>Nouvelle ajoutée</div>";  // Message ajouté dans la page en cas d'ajout réussi
         header("Location: administration_nouvelles.php");
     } else {
       $messageAjout =  "<div class='alert alert-danger'>Une erreur est survenue lors de l'ajout.</div>";  // Message ajouté dans la page en cas d’échec
     }
     $requete->close(); // Fermeture du traitement
   } else  {
     echo $mysqli->error;
   }
   $mysqli->close(); // Fermeture de la connexion
 }
 
?>

<!-- Page Content -->
<?php echo $messageAjout ?>

<div id='edit' class='container' >
	<!-- form MAJ nouvelle -->
    <form class="needs-validation" novalidate method="post">
    	<h1 class="my-4">Ajouter nouvelle</h1>
            <div class="form-row">

            <div class="col-4 mb-3">
                    <label for="code">Date *</label>
					<!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
					<input type="date" class="form-control" id="date" name="date" value="<?= date('Y-m-d'); ?>"  readonly>
                </div>

            <div class="col-4 mb-3">
					<label for="code">Categorie *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <select class="form-control" id="categorie" name="categorie" required>
                    <?php 
                    $mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
                    if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
                        echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
                        exit();
                    } 
                        $res = $mysqli->query("SELECT * from categories");
                        while ($categorie = $res->fetch_assoc()) {
                            echo "<option value='$categorie[id]'>$categorie[categorie]</option>";  
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
					<select class="form-control" id="status" name="status" required>
                        <option value='1'>Active</option>
                        <option value='0'>Inactive</option>
					</select>
					<div class="invalid-feedback">
						Le status est requis.  
					</div>
                </div>

				<div class="col-12 mb-3">
					<label for="code">Titre *</label>
					<!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
					<input type="text" class="form-control" id="titre" name="titre" required maxlength="50">
					<div class="invalid-feedback">
						Le titre est requis et ne peut comporter que 50 caractères. 
					</div>
                </div>
                
                

				<div class="col-12 mb-3">
					<label for="DC">Description courte *</label>
					<!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
					<input type="text" class="form-control" id="DC" name="DC" required maxlength="125">
					<div class="invalid-feedback">
						La description courte est requise. 
					</div>
            	</div>
          </div>
          <div class="form-row">
          	<div class="col-12 mb-3">
              <label for="DL">Description longue *</label>
              <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
              <textarea class="form-control" id="DL" name="DL"  rows="8" required ></textarea>

              <div class="invalid-feedback">
			  		La description longue est requise. 
              </div>
            </div>
          </div>        
            <button type="submit" class="btn btn-primary">Ajouter nouvelle</button>
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