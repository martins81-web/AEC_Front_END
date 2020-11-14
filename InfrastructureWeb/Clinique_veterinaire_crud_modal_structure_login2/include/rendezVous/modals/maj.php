       <!-- modal MAJ rendez-vous -->
       <div id="modalMAJ" class="modal" tabindex="-1" role="dialog">
    <form class="needs-validation" novalidate method="POST">
      <div class="modal-dialog mw-100 w-50" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier un rendez-vous</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="date">Date *</label>
                <input type="hidden" id="id_MAJ" name="id_mod">
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="date" class="form-control" id="date_MAJ" name="date"  required>
                <div class="invalid-feedback">
                  La date de rendez-vous est requise. 
                </div>
              </div>
              
              <div class="col-md-6 mb-3">
                <label for="heure">Heure *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="time" class="form-control" id="heure_MAJ" name="heure" min="08:00" max="21:00" required >
                <div class="invalid-feedback">
                  L'heure du rendez-vous est requise. Ouvert entre 8am et 21pm.
                </div>
              </div>
                  
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="duree">Durée (H) *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input  name="duree"  type="text" class="form-control" id="duree_MAJ" pattern='[0-9]*\.?[0-9]*' required />
                <div class="invalid-feedback">
                  La durée du rendez-vous est requise. La durée minimum est de 15min (0.25h).
                </div>
              </div>
              
              <div class="col-md-6 mb-3">
              <label for="id_veterinaire">Vétérinaire</label><a href='' id='ajouterVet' aria-label="Ajouter un vétérinaire" data-toggle="modal" data-target="#modalAjoutVet" class='float-right pr-3'>+Ajouter</a>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                
                <select class="form-control" id='listeMAJVet' name="id_vetMod" required>
                  <option value="">Sélectionnez un vétérinaire</option>
                </select>

                <div class="invalid-feedback">
                  L'id du vétérinaire est requis. 
                </div>
              </div>
                  
            </div>
            
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="id_proprietaire">Propriétaire</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                  <select class="form-control" id='listeMAJProp' name="id_proprietairePriorite_mod" value="<?= $animal["id_proprietairePriorite_mod"] ?>" required>
                    <option value="">Sélectionnez un propriétaire</option>
                  </select>
                      
                        <div class='invalid-feedback'>
                            Lw proprietaire est requis.
                        </div>
                      </div>
                    
                      <div class='col-md-6 mb-3'>
                      <label for='id_animal'>Animal</label><a href='' id='ajouterAnimal' aria-label="Ajouter un animal" data-toggle="modal" data-target="#modalAjoutAnimal" class='float-right pr-3'>+Ajouter</a>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                
                    <select id="listeMAJAnimal" class="form-control "  name="id_animal" required>
                        <option value="">Sélectionnez un propriétaire avant</option>
                    </select>
                    
                
                <div class="invalid-feedback">
                  L'animal est requis. 
                </div>
              
              </div>
                  
            </div>
          
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" type="submit" name="MAJSubmit">Modifier le rendez-vous</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </form>
  </div>