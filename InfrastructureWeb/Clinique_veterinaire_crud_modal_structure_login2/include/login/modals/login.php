<div class="modal fade" id="modalConnexion" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Connexion</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form method="POST">
        <div class="modal-body">
          <div class="form-group">
            <input class="form-control" type="text" placeholder="Utilisateur" name="utilisateur_login" required>
            <br>
            <input class="form-control" type="password" placeholder="Mot de passe" name="mot_de_passe_login" required>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary" name="connexionSubmit">Connexion</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button> 
        </div>
      </form>
    </div>
  </div>
</div>