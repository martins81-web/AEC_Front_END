<!-- modal ajout vétérinaire -->
<div id="modalAjoutVet" class="modal" tabindex="-1" role="dialog">
    <form class="needs-validation" novalidate method="POST">
      <div class="modal-dialog mw-100 w-50" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter un vétérinaire</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-row">
              
              <div class="col-md-6 mb-3">
                <label for="prenom">Prénom *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="text" class="form-control" id="prenomVET" name="prenom" required maxlength="25" required>
                <div class="invalid-feedback">
                  Le prénom est requis et doit comporter moins de 25 caractères. 
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <label for="nom">Nom *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="text" class="form-control" id="nomVET" name="nom" required maxlength="25" required>
                <div class="invalid-feedback">
                  Le nom est requis et doit comporter moins de 25 caractères. 
                </div>
              </div> 
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" type="submit" name="ajoutSubmit">Ajouter le vétérinaire</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </form>
  </div>
