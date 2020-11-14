<?php 
include_once('include/header.php'); 

$TVQ=0.05;
$TPS=0.09975;

?>

  <!-- Page Content -->
  <div class="container">
  
  <div class='d-print-none'>
	<h1 class="my-4">Module personnel</h1>	
	<p>Le module personnel reprends la base de données du projet 1. Il s'agit d'une base de données pour une compagnie revendeuse de téléphones mobiles, avec forfait, pour des fournisseurs comme Videotron, Bell, Rodgers, Telus, etc. 
  <br><br>La compagnie peut revendre un téléphone mobile de n’importe quel fournisseur avec le forfait respective. La compagnie a plusieurs boutiques de vente.
  <br><br>
  L'information affiché dans ce module est la facture detaillé d'une personne quelconque qui a acheté un produit dans une boutique de la compagnie.
  </p>
  </div>

	
	<!-- Affichez les enregistrement de la table que vous avez ajoutée à la base de données. -->
    <div class="row mt-5 ">
      <?php
      $res = $mysqli->query("SELECT *, clients.*, fournisseurs.nom as fNom,  boutiques.id as bID, boutiques.adresse as bAdresse, boutiques.ville as bVille, boutiques.code_postal as bCode, boutiques.province as bProvince, boutiques.pays as bPays, boutiques.telephone as bTelephone from clients 
                            INNER JOIN factures ON factures.client_id=clients.id 
                            INNER JOIN boutiques ON boutiques.id=factures.boutique_id 
                            INNER JOIN forfaits on factures.forfait_id=forfaits.id 
                            INNER JOIN fournisseurs on fournisseurs.id=forfaits.fournisseur_id 
                            INNER JOIN telephones_mobiles on telephones_mobiles.id=forfaits.telephone_mobile_id
                            WHERE clients.id=1");
      while ($row = $res->fetch_assoc()) {
        echo "<div class='col-8 mb-3 '>";
        echo "<h3>Facture détaillé de <u>$row[prenom] $row[nom]</u>:</h3>";
        echo "</div>";

        echo "<div class='col-4 mb-3 d-print-none text-right'>";
        echo  "<svg id='printbutton' width='2em' height='2em' viewBox='0 0 16 16' class='bi bi-printer-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>";
        echo  "<path d='M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5z'/>";
        echo  "<path fill-rule='evenodd' d='M11 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z'/>";
        echo  "<path fill-rule='evenodd' d='M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z'/>";
        echo  "</svg>";
        echo "</div>";

        echo '<div class="col-12 border border-dark">';

        echo '<div class="row">';
        echo "<div class='col-12 mb-4 py-3 bg-dark text-white'>";
        echo "<h4>Facture</h4>";
        echo "</div>";


        echo "<div class='col-12'>";
        echo "<p><b>Date:</b> $row[date]</p>";
        echo "</div>";


        echo "<div class='col-5'>";
        echo "<p><b>$row[prenom] $row[nom] </b><br> $row[adresse] <br> $row[ville] <br> $row[code_postal] $row[province] <br> $row[pays] </p>";
        echo "</div>";
        echo "<div class='offset-4 col-3'>";
        echo "<p><b>Boutique #$row[bID] </b><br> $row[bAdresse] <br> $row[bVille] <br> $row[bCode] $row[bProvince] <br> $row[bPays] </p>";
        echo "</div>";


        
        echo "<div class='col-12'>";
        echo "<table class='mt-3 table table-striped'>";

        echo "<tr>";
        echo "<th>Produit</th>";
        echo "<th class='text-center'>Fournisseur</th>";
        echo "<th class='text-center'>Forfait</th>";
        echo "<th class='text-center'>Prix</th>";
        echo "<th class='text-center'>Rabais</th>";
        echo "<th class='text-center'>Sous-total</th>";
        echo "</tr>";

        echo "<tr>";
        echo "<td > $row[marque] $row[modele] <br> $row[couleur] <br> <b>IMEI:</b> $row[IMEI] </td>";
        echo "<td class='text-center'> $row[fNom] </td>";
        echo "<td class='text-center'> $row[type] </td>";
        echo "<td class='text-center'> $row[prix] $ </td>";
        echo "<td class='text-center'> $row[rabais] $ </td>";
        echo "<td class='text-center'>". number_format(floatval($row['prix']-$row['rabais']),2). " $ </td>";
        echo "</tr>";
        echo "</table>";
        echo "</div>";

        echo "<div class='col-12 text-right'>";
        echo "<p><b>SOUS-TOTAL</b> ". number_format(floatval($row['prix']-$row['rabais']),2)."$</p>";
        echo "<p><b>TVQ </b>" . round(floatval(($row['prix']-$row['rabais'])*$TVQ),2)."$</p>";
        echo "<p><b>TPS </b>" . round(floatval(($row['prix']-$row['rabais'])*$TPS),2)."$</p>";
        echo "<p><b>TOTAL </b>" . round(floatval($row['prix']-$row['rabais']+($row['prix']-$row['rabais'])*0.05+($row['prix']-$row['rabais'])*0.09975),2)."$</p>";
        echo "</div>";
        echo "</div>";
        echo '</div>';
          }
          
      ?>
    
    </div>
    </div>
  </div>
<?php include_once('include/footer.php'); ?>
