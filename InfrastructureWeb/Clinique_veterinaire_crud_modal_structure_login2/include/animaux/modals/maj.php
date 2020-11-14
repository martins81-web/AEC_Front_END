<!-- modal MAJ animal -->
<div id="modalMAJ" class="modal" tabindex="-1" role="dialog">
    <form class="needs-validation" novalidate method="POST">
      <div class="modal-dialog mw-100 w-50" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier un animal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="code">Nom *</label>
              <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
              <input type="hidden" id="id_MAJ" name="id_mod" value="<?= $animal["id_mod"] ?>">
              <input type="text" class="form-control" id="nom_MAJ" name="nom_mod" value="<?= $animal["nom_mod"] ?>" required maxlength="25">
              <div class="invalid-feedback">
                Le nom est requis et doit comporter moins de 25 caractères. 
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="id_type_MAJ">Type d'animal *</label><a href='' id='ajouterType' aria-label="Ajouter un type d'animal" data-toggle="modal" data-target="#modalAjoutType" class='float-right pr-3'>+Ajouter</a>
              <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
              <select class="form-control" id='id_type_MAJ' name="id_type_mod" value="<?= $animal["id_type_mod"] ?>" required>
                <option value="">Sélectionnez un type d'animal</option>
              </select>
              <!-- <input type="number" class="form-control" id="id_type_MAJ" name="id_type_mod" value="<?= $animal["id_type_mod"] ?>" required> -->
              <div class="invalid-feedback">
                L'id de l'animal est requis. 
              </div>
            </div>
          </div>
          <div class="form-row">
          <div class="col-md-6 mb-3">
              <label for="nom">Date de naissance *</label>
              <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
              <input type="date" class="form-control" id="dateDeNaissance_MAJ" name="dateDeNaissance_mod" value="<?= $animal["dateDeNaissance_mod"] ?>" >
              <div class="invalid-feedback">
                La date de naissance est requise. 
              </div>
            </div>
          <div class="col-md-6 mb-3">
              <label for="listeMAJProp">Propriétaire *</label><a href='' id='ajouterProp' aria-label="Ajouter un propriétaire" data-toggle="modal" data-target="#modalAjoutProp" class='float-right pr-3'>+Ajouter</a>
              <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
              <select class="form-control" id='listeMAJProp' name="id_proprietairePriorite_mod" value="<?= $animal["id_proprietairePriorite_mod"] ?>" required>
                <option value="">Sélectionnez un propriétaire</option>
              </select>
              <!-- <input type="number" class="form-control" id="id_proprietairePriorite_MAJ" name="id_proprietairePriorite_mod" value="<?= $animal["id_proprietairePriorite_mod"] ?>" required> -->
              <div class="invalid-feedback">
                L'id du propriétaire est requis. 
              </div>
            </div>
            
            
          </div>
          
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" type="submit" name="MAJSubmit">Modifier l'animal</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </form>
  </div>