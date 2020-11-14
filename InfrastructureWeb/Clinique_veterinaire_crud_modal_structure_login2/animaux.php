<?php
     $page = "Animaux";
     include_once 'include/header.php';
    include_once "include/config.php";

if(!isset($_SESSION["utilisateur"])) {
  echo '<h1 class="ml-5 mt-5" style="text-transform: uppercase;">Accès refusé !!!</h1>';
  echo '<h4 class="ml-5">Veuillez vous authentifier pour accéder à cette page</h4>';
} else  {

     include_once "include/animaux/code_php/ajoutAnimal.php";
     include_once 'include/animaux/code_php/majAnimal.php';
     include_once 'include/animaux/code_php/suppressionAnimal.php';
     include_once 'include/types/code_php/ajoutTypeAnimal.php';
     include_once 'include/proprietaires/code_php/ajoutProp.php';

     $mysqli = new mysqli($host, $username, $password, $database);
     // Vérifier la connexion
     if ($mysqli -> connect_errno) {
       echo "Échec de connexion à la base de données MySQL: " . $mysqli -> connect_error;
       exit();
     }
?>

<div class='container-fluid'>
  <div class='row'>
  <div class='col-md-6 mt-3'>
          <h1>Liste des animaux</h1>
      </div>
    <div class='col-md-6 '>
          <!-- Nouveau ! Bouton d'ajout -->
            <button class="btn btn-primary float-right m-3" aria-label="Ajouter un animal" data-toggle="modal" data-target="#modalAjoutAnimal"> 
            <svg class="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
              <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
            </svg>
            Ajouter un animal 
          </button>
      </div>
    <div class='col-12'>
          <?php
            echo $messageAjout;
            echo $messageSuppr;
            echo $messageMAJ;
          ?>
    </div>
  </div>
</div>

<?php
    $res = $mysqli->query(" SELECT animaux.id, animaux.nom AS nomAnimal, types.type AS typeAnimal, CONCAT(proprietaires.prenom, ' ' , proprietaires.nom) AS nomProprietaire, proprietaires.telephone AS telephoneProprietaire FROM animaux 
                            INNER JOIN types ON animaux.id_type=types.id
                            INNER JOIN proprietaires ON animaux.id_proprietairePriorite=proprietaires.id");
  
    echo "<table class='mt-2 ml-5 table table-striped w-auto'>";

    // Affichage de l'entête du tableau
    echo "<tr>";
    echo "<th>Nom de l'animal</th>";
    echo "<th>Type d'animal</th>";
    echo "<th>Propriétaire</th>";
    echo "<th>Téléphone</th>";
    echo "<th class='text-center'>Actions</th>";
    echo "</tr>";
    
    while ($row = $res->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["nomAnimal"] . "</td>";
        echo "<td>" . $row["typeAnimal"] . "</td>";
        echo "<td>" . $row["nomProprietaire"] . "</td>";
        echo "<td>" . $row["telephoneProprietaire"] . "</td>";

        // Nouveau ! Boutons d'action dans la dernière colonne
        echo '<td class="text-center">';

        // bouton afficher
        echo '<button class="btn btn-default boutonAfficher" data-toggle="modal" data-id="' . $row["id"] . '" data-target="#modalAffichage">';
        echo '<svg class="bi bi-eye" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
        echo '<path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>';
        echo '<path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>';
        echo '</svg>';
        echo '</button>';
       
        // bouton modifier
        echo '<button class="btn btn-default boutonMAJ" data-toggle="modal" data-id="' . $row["id"] . '" data-target="#modalMAJ">';
        echo '<svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
        echo '<path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>';
        echo '<path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>';
        echo '</svg>';
        echo '</button>';


        // bouton supprimer
        echo '<button type="button" class="btn btn-default boutonSupprimer" data-toggle="modal" data-id="' . $row["id"] . '" data-target="#modalSuppr">';
        echo '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
        echo '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>';
        echo '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>';
        echo '</svg>';
        echo '</button>';

      echo '</td>';
      echo '</tr>';
      
    }
    echo "</table>";

  include_once 'include/animaux/modals/affichage.php';
  include_once 'include/animaux/modals/maj.php';
  include_once 'include/animaux/modals/ajout.php';
  include_once 'include/animaux/modals/suppression.php';
  include_once 'include/types/modals/ajoutTypeAnimal.php';
  include_once 'include/proprietaires/modals/ajoutProp.php';

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

      $(document).on("click", "#ajouterType", function () {
      $("#modalAjoutAnimal").modal('hide');
      $("#modalMAJ").modal('hide');
    }); 

    $(document).on("click", "#ajouterProp", function () {
      $("#modalAjoutAnimal").modal('hide');
      $("#modalMAJ").modal('hide');
    }); 

    $(document).on("click", ".boutonSupprimer", function () {
        console.log($(this).data('id'));
          $("#idAnimalASupprimer").val($(this).data('id'));
    });     

      
          
    $(document).on("click", ".boutonMAJ", function () {
        //console.log($(this).data('id'));
        var url = "ajax/animaux/get_animal.php?id=" + $(this).data('id');
        $.get(url, function( data ) {
        //console.log(data);
        $("#id_MAJ").val(data.id);
        $("#nom_MAJ").val(data.nom);
        $("#dateDeNaissance_MAJ").val(data.dateDeNaissance);
        $("#id_type_MAJ").val(data.id_type);
        $("#id_proprietairePriorite_MAJ").val(data.id_proprietairePriorite);
      });
    });

    $(document).on("click", ".boutonMAJ", function () {
    var url = "ajax/animaux/get_animal.php?id=" + $(this).data('id');
    var propID;
        $.get(url, function( data ) {
        //console.log(data);
        propID= data.id_proprietairePriorite;
        //console.log(propID);
          $.ajax({
            url:'ajax/proprietaires/get_propID.php',
            type:'GET',
            dataType : 'html',
            data: 'id='+propID,
            success : function(resultat, statut){
              $('#listeMAJProp').html(resultat);
            }
          });
        }); 
    });

    $(document).on("click", ".boutonMAJ", function () {
    var url = "ajax/animaux/get_animal.php?id=" + $(this).data('id');
    var typeID;
        $.get(url, function( data ) {
        console.log(data);
        typeID= data.id_type;
        console.log(typeID);
          $.ajax({
            url:'ajax/types/get_typeID.php',
            type:'GET',
            dataType : 'html',
            data: 'id='+typeID,
            success : function(resultat, statut){
              $('#id_type_MAJ').html(resultat);
            }
          });
        }); 
    });

   

    $(document).on("click", ".boutonAfficher", function () {
    console.log($(this).data('id'));
    var url = "ajax/animaux/get_animal.php?id=" + $(this).data('id');
    $.get(url, function( data ) {
      console.log(data);
      $("#nomAnimal").html(data.nom);
      $("#typeAnimal").html(data.type);
    });
    });      

    $(document).on("click", ".boutonAfficher", function () {
    //console.log($(this).data('id'));
    var url = "ajax/animaux/get_animal.php?id=" + $(this).data('id');
    var animalID;
        $.get(url, function( data ) {
        console.log(data);
        animalID= data.id;
        //console.log(animalID);
            $.ajax({
              url:'ajax/animaux/get_RV_animal.php',
              type:'GET',
              dataType : 'html',
              data: 'id='+animalID,
              success : function(resultat, statut){
                $('#RV_Animal').html(resultat);
              }
            });
        }); 
    });   
</script>

<?php
}
  include_once 'include/bootstrap_scripts.php';
  include_once 'include/footer.php';
?>