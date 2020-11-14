  <!-- modal suppression animal -->
  <div id="modalSuppr" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Suppression d'un animal</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Voulez-vous vraiment supprimer cet animal?</p>
        </div>
        <div class="modal-footer">
          <form method="POST">
            <input type="hidden" id="idAnimalASupprimer" name="id">
            <button class="btn btn-danger" name="supprSubmit" type="submit">Oui</button>            
          </form>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
        </div>
      </div>
    </div>
  </div>

