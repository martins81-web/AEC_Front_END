<!--Modal - Affichage -->
<div id="modalAffichage" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Fiche animal</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row m-2">
          <div class="col-lg-5 border">
            Image(s) ici
          </div>
          <div class="col-lg-7">
            <input id='idAnimal' type='hidden'>
            <h3><span id="nomAnimal"></span></h3>
            <h5><span id="typeAnimal"></span></h5>
            <p>Description...</p>
          </div>
        </div>
        <div class="row m-2">
          <div class="col-12 mt-3">
            Liste des rendez-vous à venir:
          </div>
          <div class="col-12" id='RV_Animal'>
        
          </div>
        </div>      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>    
</div>