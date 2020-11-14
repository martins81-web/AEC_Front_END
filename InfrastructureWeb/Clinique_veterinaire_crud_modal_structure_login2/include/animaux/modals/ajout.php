<!-- modal ajout animal -->
<div id="modalAjoutAnimal" class="modal" tabindex="-1" role="dialog">
    <form class="needs-validation" novalidate method="POST">
      <div class="modal-dialog mw-100 w-50" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter un animal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                <div class="form-row">
              
              <div class="col-md-6 mb-3">
                <label for="nom">Nom *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="text" class="form-control" id="nom" name="nom" required maxlength="25" required>
                <div class="invalid-feedback">
                  Le nom est requis et doit comporter moins de 25 caractères. 
                </div>
              </div>
              
              <div class="col-md-6 mb-3">
            
                    <label for="dateDeNaissance">Date de naissance *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
              <input type="date" class="form-control" id="dateDeNaissance" name="dateDeNaissance" required >
                <div class="invalid-feedback">
                La date de naissance est requise.
                </div>
              </div>
                  
            </div>

            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="id_type">Type d'animal * </label><a href='' id='ajouterType' aria-label="Ajouter un type d'animal" data-toggle="modal" data-target="#modalAjoutType" class='float-right pr-3'>+Ajouter</a>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    
                <?php
                    $result = $mysqli->query("SELECT * FROM types");
                    echo '<select class="form-control selectpicker" data-live-search="true" name="id_type" required>';

                    echo '<option value="">Sélectionnez un type d´animal</option>';
                    while ($row = $result->fetch_assoc()) {
                      echo "<option value='$row[id]'>$row[type]</option>";
                      }
                      echo "</select>";
                      
                ?>
          
                <div class="invalid-feedback">
                    Le type est requis. 
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="id_proprietairePriorite">Propriétaire principal *</label><a href='' id='ajouterProp' aria-label="Ajouter un propriétaire" data-toggle="modal" data-target="#modalAjoutProp" class='float-right pr-3'>+Ajouter</a>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <?php
                    $result = $mysqli->query("SELECT * FROM proprietaires");
              
                    echo '<select class="form-control selectpicker" data-live-search="true" name="id_proprietairePriorite" required>';
                    echo '<option  value="">Sélectionnez un propriétaire</option>';
                    while ($row = $result->fetch_assoc()) {
                      echo "<option value='$row[id]'>$row[prenom] $row[nom]</option>";
                      }
                      echo "</select>";
                ?>

                <div class="invalid-feedback">
                  Le propriétaire est requis. 
                </div>
              </div>
            </div>
          
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" type="submit" name="ajoutSubmit">Ajouter l'animal</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </form>
  </div>