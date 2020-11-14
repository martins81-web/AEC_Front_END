<div id="modalAjout" class="modal" tabindex="-1" role="dialog">
  <form class="needs-validation" novalidate method="POST">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ajouter un utilisateur</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="utilisateur">Utilisateur *</label>
            <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
            <input type="text" class="form-control" id="utilisateur" name="utilisateur" required maxlength="100">
            <div class="invalid-feedback">
              L'utilisateur est requis et doit comporter moins de 100 caractères. 
            </div>
          </div>
          <div class="form-group">
            <label for="mot_de_passe">Mot de passe *</label>
            <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
            <input type="password" class="form-control" id="mot_de_passe" name="mot_de_passe" required minlength="2" maxlength="50">
            <div class="invalid-feedback">
              Le mot de passe est requis et doit comporter entre 2 et 50 caractères. 
            </div>
          </div>
          <div class="form-group">
            <label for="courriel">Courriel *</label>
            <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
            <input type="email" class="form-control" id="courriel" name="courriel" required minlength="2" maxlength="255">
            <div class="invalid-feedback">
              Le courriel est requis et doit comporter entre 2 et 255 caractères. 
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" type="submit" name="ajoutSubmit">Ajouter l'utilisateur</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
        </div>
      </div>
    </div>
  </form>
</div>