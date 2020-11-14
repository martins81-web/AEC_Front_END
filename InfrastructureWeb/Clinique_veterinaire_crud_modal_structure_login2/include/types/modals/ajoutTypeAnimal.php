<!-- modal ajout type d'animal -->
<div id="modalAjoutType" class="modal" tabindex="-1" role="dialog">
  <form id='formType' class="needs-validation" novalidate method="POST">
    <div class="modal-dialog  modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ajouter un type d'animal</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-row">
            <div class="col-12 mb-3">
              <label for="type">Type *</label>
              <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
              <input type="text" class="form-control" id="type" name="type" required maxlength="25" required>
              <div class="invalid-feedback">
                Le type est requis et doit comporter moins de 25 caractères. 
              </div>
            </div> 
          </div>  
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" type="submit" id="ajoutSubmitType" name="ajoutSubmitType" >Ajouter le type</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
        </div>
      </div>
    </div>
  </form>
</div>