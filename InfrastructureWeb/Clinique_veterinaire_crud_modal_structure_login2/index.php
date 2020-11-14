<?php
      $page = "Accueil";
      include_once 'include/header.php';
      include_once "include/config.php";

      $mysqli = new mysqli($host, $username, $password, $database);
      // Vérifier la connexion
      if ($mysqli -> connect_errno) {
        echo "Échec de connexion à la base de données MySQL: " . $mysqli -> connect_error;
        exit();
      } 
?>
    <div class='container mt-5'>
      <h3>APPRENEZ-EN DAVANTAGE SUR NOTRE CLINIQUE VÉTÉRINAIRE</h3>
      <h5 class='mt-5'>NOTRE HISTOIRE</h5>
      <p>En 2020, Eric Martins a fondé la clinique vétérinaire Martins, à St-Jean-sur-Richelieu. </p>
      <img class='img-fluid' src="https://images-topvet.azureedge.net/images/0eca7bd0-545d-4916-a989-d448e807865f-small" alt="clinique" width="600" height="500">
      <h5 class='mt-5'>NOTRE ÉQUIPE</h5>
      <div class='ml-3'>
        <h6 class='my-3'>LES VÉTÉRINAIRES</h6>
        <?php
          $res = $mysqli->query("SELECT prenom, nom FROM veterinaires ORDER BY nom");
          echo "<ul>";
                  while ($row = $res->fetch_assoc()) {
              echo "<li> Dr. " . $row["prenom"] . "  " . $row["nom"] . "</li>";
          }
          echo "</ul>";
          echo "</div>";
          echo "</div>";
          echo "</div>";
        ?>
      </div>
    </div>

<?php
  include_once 'include/bootstrap_scripts.php';
  include_once 'include/footer.php';
?>