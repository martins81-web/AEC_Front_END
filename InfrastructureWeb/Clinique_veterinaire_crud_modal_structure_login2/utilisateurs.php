<?php
$page = "Utilisateurs";
include_once "include/config.php";
include_once 'include/header.php';


if(!isset($_SESSION["utilisateur"])) {
    echo '<h1 class="ml-5 mt-5" style="text-transform: uppercase;">Accès refusé !!!</h1>';
    echo '<h4 class="ml-5">Veuillez vous authentifier pour accéder à cette page</h4>';
  } else {

    

  include_once 'include/utilisateurs/code_php/suppression.php';
  include_once 'include/utilisateurs/code_php/ajout.php';
  include_once 'include/utilisateurs/code_php/maj.php';
?>

<div class="container mt-3">
  <div class="row">
    <div class="col">
      <h1>Liste des utilisateurs</h1>
    </div>
    <div class="col">
      <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#modalAjout">
        <svg class="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
          <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
        </svg>
        Ajouter un utilisateur
      </button>
    </div>
  </div>
      
  <?php 

    $mysqli = new mysqli($host, $username, $password, $database);

    // Vérifier la connexion
    if ($mysqli -> connect_errno) {
      echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
      exit();
    } 

    
    $res = $mysqli->query("SELECT * FROM utilisateurs");
    $mysqli->close(); // Fermeture de la connexion 


    echo '<table class="table">';

    // Affichage de l'entête du tableau
    echo '<tr>';
    echo '<th>utilisateur</th>';
    echo '<th>courriel</th>';
    echo '<th class="text-center">Actions</th>';
    echo '</tr>';
    
    while ($row = $res->fetch_assoc()) {
      echo '<tr>';

      echo '<td>' . $row["utilisateur"] .'</td>';
      echo '<td>' . $row["courriel"] . '</td>';
      echo '<td class="text-center">'; 

        // bouton modifier
        echo '<button class="btn btn-default boutonMAJ  mr-1" data-toggle="modal" data-id="' . $row["id"] . '" data-target="#modalMAJ">';
        echo '<svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
        echo '<path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>';
        echo '<path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>';
        echo '</svg>';
        echo '</button>';

        
        // bouton supprimer
        echo '<button type="button" class="btn btn-default boutonSupprimer " data-toggle="modal" data-id="' . $row["id"] . '" data-target="#modalSuppr">';
        echo '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
        echo '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>';
        echo '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>';
        echo '</svg>';
        echo '</button>';


      echo '</td>';
    }
    echo '</table>';

    
    echo $messageSuppr;
    echo $messageMAJ;
    echo $messageAjout;
?>
    
</div>


                  

<?php
include_once 'include/utilisateurs/modals/maj.php';
  include_once 'include/utilisateurs/modals/ajout.php';
  include_once 'include/utilisateurs/modals/suppression.php';
?>

<?php
 } 
  include_once 'include/bootstrap_scripts.php';
?>
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

 $(document).on("click", ".boutonSupprimer", function () {
        console.log($(this).data('id'));
          $("#idUtilisateurASupprimer").val($(this).data('id'));
    });  

    $(document).on("click", ".boutonMAJ", function () {
        //console.log($(this).data('id'));
        var url = "ajax/utilisateurs/get_user.php?id=" + $(this).data('id');
        $.get(url, function( data ) {
        console.log(data);
        $("#id_MAJ").val(data.id);
        $("#courriel_MAJ").val(data.courriel);
        $("#utilisateur_MAJ").val(data.utilisateur);       
      });
    });

</script>

<?php
  include_once 'include/footer.php';

?>
