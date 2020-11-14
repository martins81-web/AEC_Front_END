<!-- modal ajout propriétaire -->
<div id="modalAjoutProp" class="modal" tabindex="-1" role="dialog">
    <form class="needs-validation" novalidate method="POST">
      <div class="modal-dialog  modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter un propriétaire</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-row">
                <div class="col-md-12 mb-3">
                    <label for="prenom">Prénom *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <input type="text" class="form-control" id="prenom" name="prenomProp" required maxlength="25" required>
                    <div class="invalid-feedback">
                    Le Prénom est requis et doit comporter moins de 25 caractères. 
                    </div>
                </div>
                <div class="col-md-12 mb-3">
                    <label for="nom">Nom *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <input type="text" class="form-control" id="nomProp" name="nomProp" required maxlength="25" required>
                    <div class="invalid-feedback">
                    Le nom est requis et doit comporter moins de 25 caractères. 
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-12 mb-3">
                    <label for="adresse">Adresse *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <input type="text" class="form-control" id="adresse" name="adresse" required maxlength="255" required>
                    <div class="invalid-feedback">
                    L'adresse est requis et doit comporter moins de 255 caractères. 
                    </div>
                </div>
                <div class="col-md-12 mb-3">
                    <label for="telephone">Téléphone *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <input type="text" class="form-control" id="telephone" name="telephone" required maxlength="20" required>
                    <div class="invalid-feedback">
                    Le numéro de téléphone est requis. 
                    </div>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" type="submit" id="ajoutSubmitProp" name="ajoutSubmitProp" >Ajouter le propriétaire</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
      </form>
  </div>