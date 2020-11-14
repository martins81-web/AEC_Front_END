<?php

$page = 'Rendez-vous';
include_once 'include/header.php';
include_once "include/config.php";

if(!isset($_SESSION["utilisateur"])) {
  echo '<h1 class="ml-5 mt-5" style="text-transform: uppercase;">Accès refusé !!!</h1>';
  echo '<h4 class="ml-5">Veuillez vous authentifier pour accéder à cette page</h4>';
} else  {

     
      include_once "include/rendezVous/code_php/ajout.php";
      include_once "include/rendezVous/code_php/suppression.php";
      include_once "include/rendezVous/code_php/maj.php";
      include_once "include/animaux/code_php/ajoutAnimal.php";
      include_once 'include/types/code_php/ajoutTypeAnimal.php';
      include_once 'include/proprietaires/code_php/ajoutProp.php';
      include_once 'include/veterinaires/code_php/ajout.php';
  
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
          <h1>Liste des Rendez-vous a venir</h1>
      </div>
    <div class='col-md-6 mt-3'>
  <!-- Nouveau ! Bouton d'ajout -->
        <button class="btn btn-primary float-right m-3" aria-label="Ajouter un rendez-vous" data-toggle="modal" data-target="#modalAjout"> 
              <svg class="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
              </svg>
              Ajouter un rendez-vous 
        </button>
    </div>
    <div class='col-12'>
          <?php
            echo $messageSuppr;
            echo $messageMAJ;
            echo $messageAjout;
          ?>
    </div>
  </div>
</div>

<?php
    $res = $mysqli->query(" SELECT rendezvous.id AS numRendezVous, date, duree, TIME_FORMAT(heure, '%H:%i' ) as heure , animaux.nom AS nomAnimal, types.type AS typeAnimal, 
                            CONCAT(proprietaires.prenom, ' ' , proprietaires.nom) AS nomProprietaire, proprietaires.telephone AS telephone, 
                            CONCAT(veterinaires.prenom, ' ' , veterinaires.nom) AS nomVet FROM rendezvous 
                            INNER JOIN proprietaires ON rendezvous.id_proprietaire=proprietaires.id 
                            INNER JOIN animaux ON rendezvous.id_animal=animaux.id
                            INNER JOIN types ON types.id=animaux.id_type 
                            INNER JOIN veterinaires ON rendezvous.id_veterinaire=veterinaires.id 
                            WHERE rendezvous.date>=CURRENT_DATE() 
                            ORDER by rendezvous.date, rendezvous.heure"
                          );
                          
                          echo "<div class='container-fluid m-0 p-0 '>";
                          echo "<div class='row m-3'>";
                          while ($row = $res->fetch_assoc()) {
                          echo "<div class='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 px-2 mb-3'>";
                          echo "<div class='card h-100'>";
                          echo "<div class='card-header bg-warning '>";
                          echo "<div class=''>";
                          echo "<div class='d-flex justify-content-center'>";
                          echo  "<h5><u><b>Rendez-vous:</b> #" . $row["numRendezVous"] . " </u></h5>";
                          echo  "</div>";

                          echo "<div class='d-flex justify-content-end'>";
        // bouton modifier
        echo '<button class="btn btn-default boutonMAJ border-dark mr-1" data-toggle="modal" data-id="' . $row["numRendezVous"] . '" data-target="#modalMAJ">';
        echo '<svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
        echo '<path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>';
        echo '<path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>';
        echo '</svg>';
        echo '</button>';


        // bouton supprimer
        echo '<button type="button" class="btn btn-default boutonSupprimer border-dark" data-toggle="modal" data-id="' . $row["numRendezVous"] . '" data-target="#modalSuppr">';
        echo '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">';
        echo '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>';
        echo '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>';
        echo '</svg>';
        echo '</button>';

                          echo  "</div>";
                          echo  "</div>";
                          echo  "</div>";
                          echo  "<ul class='list-group list-group-flush'>";
                          echo  "<li class='list-group-item'><b>Date:</b> " .$row["date"] . "<br><b>Heure:</b> " .($row["heure"]). "h<br><b>Durée:</b> ".clockalize($row["duree"]) ."</li>";
                          echo  "<li class='list-group-item'><b>Vétérinaire:</b> Dr. " .$row["nomVet"]. "</li>";
                          echo  "<li class='list-group-item'><b>Nom de l'animal:</b> " .$row["nomAnimal"]. " <br><b>Type de l'animal:</b> " .$row["typeAnimal"]. " </li>";
                          echo  "<li class='list-group-item'><b>Propriétaire:</b> " .$row["nomProprietaire"]. "<br><b>Téléphone:</b> " .$row["telephone"]. "</li>";
              
                          echo "</ul>";
                          echo "</div>";
                          echo "</div>";
                        }

                        echo "</div>";
                        echo "</div>";

                      

                      
                      
                       //echo clockalize("17.5"); // 17:30

  include_once 'include/veterinaires/modals/ajout.php';
  include_once 'include/types/modals/ajoutTypeAnimal.php';
  include_once 'include/proprietaires/modals/ajoutProp.php';
  include_once 'include/rendezVous/modals/ajout.php';
  include_once 'include/rendezVous/modals/suppression.php';
  include_once 'include/rendezVous/modals/maj.php';
  include_once 'include/animaux/modals/ajout.php';
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


  $(document).ready(function(){
    $('#listeProp').on('change',function(){
        var propID=$(this).val();
        console.log('propID='+propID);
        if(propID){
            $.ajax({
              url:'ajax/rendezVous/ajaxData.php',
              type:'GET',
              dataType : 'html',
              data: 'propID='+propID,
              success : function(resultat, statut){
              $('#listeAnimal').html(resultat);
              }
            });
        } else{
          $('#listeAnimal').html('<option value="">Sélectionnez un propriétaire avant</option>');
        }
        
    });
  });

  

  $(document).on("click", "#ajouterType", function () {
      $("#modalAjoutAnimal").modal('hide');
    }); 

  $(document).on("click", "#ajouterProp", function () {
      $("#modalAjoutAnimal").modal('hide');
    }); 

    $(document).on("click", "#ajouterAnimal", function () {
      $("#modalAjout").modal('hide');
      $("#modalMAJ").modal('hide');
    }); 

    $(document).on("click", "#ajouterVet", function () {
      $("#modalAjout").modal('hide');
      $("#modalMAJ").modal('hide');
    }); 


    $(document).on("click", ".boutonSupprimer", function () {
        console.log($(this).data('id'));
          $("#idRendezVousASupprimer").val($(this).data('id'));
    });     
    

    $(document).on("click", ".boutonMAJ", function () {
        //console.log($(this).data('id'));
        var url = "ajax/rendezVous/get_RV.php?id=" + $(this).data('id');
        $.get(url, function( data ) {
        //console.log(data);
        $("#id_MAJ").val(data.numRendezVous);
        $("#date_MAJ").val(data.date);
        $("#duree_MAJ").val(data.duree);
        $("#heure_MAJ").val(data.heure);
        // $("#id_type_MAJ").val(data.id_type);
        // $("#id_proprietairePriorite_MAJ").val(data.id_proprietairePriorite);
      });
    });

    $(document).on("click", ".boutonMAJ", function () {
    var url = "ajax/rendezVous/get_RV.php?id=" + $(this).data('id');
    var propID;
        $.get(url, function( data ) {
        //console.log(data);
        propID= data.propID;
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
    var url = "ajax/rendezVous/get_RV.php?id=" + $(this).data('id');
    var vetID;
        $.get(url, function( data ) {
        //console.log(data);
        vetID= data.vetID;
        //console.log(vetID);
          $.ajax({
            url:'ajax/veterinaires/get_vetList.php',
             type:'GET',
             dataType : 'html',
             data: 'id='+vetID,
             success : function(resultat, statut){
               $('#listeMAJVet').html(resultat);
             }
           });
        }); 
    });

    $(document).on("click", ".boutonMAJ", function () {
    var url = "ajax/rendezVous/get_RV.php?id=" + $(this).data('id');
    var propID;
    var animalID;
        $.get(url, function( data ) {
        //console.log(data);
        propID= data.propID;
        animalID= data.animalID;
        console.log(propID);
        console.log(animalID);
          $.ajax({
            url:'ajax/animaux/get_animalList.php',
             type:'GET',
             dataType : 'html',
             data: { 
                  'propID': propID, 
                  'animalID': animalID          
             },
             success : function(resultat, statut){
               $('#listeMAJAnimal').html(resultat);
             }
           });
        }); 
    });


    $(document).ready(function(){
    $('#listeMAJProp').on('change',function(){
        var propID=$(this).val();
        //console.log('propID='+propID);
        if(propID){
            $.ajax({
              url:'ajax/rendezVous/ajaxData.php',
              type:'GET',
              dataType : 'html',
              data: 'propID='+propID,
              success : function(resultat, statut){
              $('#listeMAJAnimal').html(resultat);
              }
            });
        }
    });
  });
  
</script>

<?php
  include_once 'include/footer.php';
?>
<?php

function clockalize($in){

  $heures = intval($in);
  $minutes = round((((($in - $heures) / 100.0) * 60.0) * 100), 0);

  if ($minutes == 60)
  {
    $heures++;
    $minutes = 0;
  }

  if ($heures == 0){
    $retval = sprintf("%02dmin", $minutes);
  } else {
    $retval = sprintf("%02d:%02dh", $heures, $minutes);
  }
  return $retval;
}
?>