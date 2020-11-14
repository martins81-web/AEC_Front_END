<?php 
  include_once('include/header.php'); 
?>



  <!-- Page Content -->
  <div class="container">

    <h1 class="my-4">Projet final</h1>

    

    <!-- Marketing Icons Section -->
    <div class="row">
      <?php
              $res = $mysqli->query(" SELECT * from nouvelles
                                      where actif=1
                                      ORDER BY date_nouvelle DESC
                                      LIMIT 0, 3");
              while ($row = $res->fetch_assoc()) {
                  echo '<div class="col-lg-4 mb-4">';
                  echo '<div class="card h-100">';
                  echo '<h4 class="card-header">'.$row["titre"].'</h4>';
                  echo '<div class="card-body">';
                  echo '<h6 class="card-title">'.$row["date_nouvelle"].'</h6>';
                  echo '<p class="card-text">'.$row["description_courte"].'</p>';
                  echo '</div>';
                  echo '<div class="card-footer">';
                  echo '<a href="nouvelle.php?id='.$row['id'].'" class="btn btn-primary">Plus d´information</a>';
                  echo '</div>';
                  echo '</div>';
                  echo '</div>';
              }
            ?>
      
    </div>
    <!-- /.row -->
	
  </div>
  <!-- /.container -->

<?php include_once('include/footer.php'); ?>
