<?php include_once('include/header.php'); ?>

  <!-- Page Content -->
  <div class="container">
  
	<h1 class="my-4">Énoncé</h1>
	<p>Ce projet doit démontrer votre capacité à manipuler une base de données avec le langage PHP. Cet énoncé présente les étapes de réalisation du projet.<p>
	
	<h4>Étape 0 : Inscrivez votre nom complet dans le copyright du pied de page.</h4>
	
	<h4>Étape 1 : Importation de la base de données et configuration du site</h4>
	<ul>
	  <li>Un script de la base de données à utiliser est disponible dans le dossier dev.</li>
	  <li>Importez cette base de données et ajoutez les configurations nécessaires pour lier le site à la base de données.</li>
	</ul>
	
	<h4>Étape 2 : Module Nouvelles</h4>
	<p>
		Le module de nouvelles représente le coeur du projet. Plusieurs changements doivent être apportés au site pour qu'il soit fonctionnel. 
	</p>
	<ul>
	  <li><b>Affichage des catégories des nouvelles dans le menu</b>
		<ul>
		  <li>Une table contenant les catégories est présente dans la base de données importée.</li>
		  <li>Affichez la liste des catégories <span class="badge badge-danger">actives</span> dans le sous-menu Nouvelles</li>
		</ul>
	  </li>
	  <li><b>Affichage des nouvelles récentes sur la page d'accueil</b>
		<ul>
		  <li>Une table contenant les nouvelles est présente dans la base de données importée.</li>
		  <li>Affichez les <span class="badge badge-danger">3 nouvelles les plus récentes</span> et <span class="badge badge-danger">actives</span>. 
		  <li>Respectez la mise en forme existante.:
			<ul>
			  <li>Les nouvelles doivent s'afficher dans les cartes et doivent présenter le <span class="badge badge-info">titre de la nouvelle</span>, <span class="badge badge-info">la date (format de votre choix)</span> et la <span class="badge badge-info">description courte</span>.</li>
			  <li>Le bouton <span  class="badge badge-info">Plus d'information</span> doit mener à l'affichage de la fiche détaillée de la nouvelle.</li>
		    </ul>
		  </li>
		</ul>
	  </li>
	  <li><b>Affichage des nouvelles par catégorie</b>
		<ul>
		  <li>Lorsque l'utilisateur clique sur l'une des catégories de nouvelles du menu, le lien doit mener à la page <span class="badge badge-info">nouvelles_categories.php</span> avec <span class="badge badge-danger">le numéro de catégorie en paramètre dans l'url.</span></li>
		  <li>Le titre de la catégorie doit s'afficher comme titre de page (h1).</li>
		  <li>Les nouvelles <span class="badge badge-danger">actives</span> de la <span class="badge badge-danger">catégorie sélectionnée</span> doivent s'afficher.</li>
		  <li>Les nouvelles doivent s'afficher en <span class="badge badge-danger">ordre chronologique</span>, la plus récente apparaissant dans le haut de la page.</li>
		  <li>La mise en forme est à votre discrétion, mais ne doit pas être représentée sous forme de cartes.</li>
		  <li>Les informations à afficher sont le <span class="badge badge-info">titre de la nouvelle</span>, <span class="badge badge-info">la date (format de votre choix)</span> et la <span class="badge badge-info">description courte</span>, ainsi qu'un <span class="badge badge-info">lien menant à la fiche détaillée de la nouvelle</span>.</li>
		</ul>
	  </li>
	  <li><b>Affichage de toutes les nouvelles</b>
		<ul>
		  <li>Lorsque l'utilisateur clique sur le lien "Toutes les nouvelles" du menu, le lien doit mener à la page <span class="badge badge-info">nouvelles.php</span>.</li>
		  <li>Toutes les nouvelles <span class="badge badge-danger">actives</span> doivent s'afficher.</li>
		  <li>Les nouvelles doivent s'afficher en <span class="badge badge-danger">ordre chronologique</span>, la plus récente apparaissant dans le haut de la page.</li>
		  <li>La mise en forme doit être identique au format utilisé à l'affichage des nouvelles par catégories.</li>
		</ul>
	  </li>
	  <li><b>Affichage d'une nouvelle détaillée</b>
		<ul>
		  <li>Lorsque l'utilisateur clique le lien d'une nouvelle, le lien doit mener à la page <span class="badge badge-info">nouvelle.php</span>.</li>
		  <li>Le mise en forme est à votre discrétion.</li>
		  <li>Les informations à afficher sont le <span class="badge badge-info">titre de la nouvelle</span>, <span class="badge badge-info">la date (format de votre choix)</span> et la <span class="badge badge-info">description longue</span>.</li>
		</ul>
	  </li>
	  <li><b>Gestion des nouvelles</b>
		<ul>
		  <li>Le lien nouvelles.php disponible dans le menu Administration doit permettre de gérer la liste des nouvelles :<span class="badge badge-info">lister</span>, <span class="badge badge-info">ajouter</span>, <span class="badge badge-info">modifier</span> et <span class="badge badge-info">supprimer</span>.</li>
		  <li><i>Vous pouvez réaliser cette demande en utilisant plusieurs pages php (une pour l'ajout, une pour l'édition et une pour la suppression) ou utiliser des composants Modals.</i></li>
		  <li>Les formulaires d'ajout et de modifications doivent permettre de manipuler tous les champs : <span class="badge badge-info">Titre de la nouvelle</span>, <span class="badge badge-info">date</span>, <span class="badge badge-info">catégorie</span>, <span class="badge badge-info">description courte</span>, <span class="badge badge-info">description longue</span>, <span class="badge badge-info">actif</span>).</li>
		  <li>Portez une <span class="badge badge-warning">attention particulière</span> aux formats d'entrées choisis ainsi qu'aux validations. Tous les champs sont <span class="badge badge-danger">obligatoires</span>.</li>		  
		</ul>
	  </li>
	</ul>
	
	<h4>Étape 3 : Module personnel</h4>
	<ul>
	  <li>Vous devez ajouter un module de votre choix à la base de données.</li>
	  <li>Votre module doit comporter un minimum de 2 tables et peut reprendre une partie ou l'intégralité du 1er projet.</li>
	  <li>Chaque table doit avoir au minimum 5 enregistrements.</li>
	  <li>La page module_personnel.php doit afficher le résultat d'une <span class="badge badge-info">requête avec jointure</span> de votre choix dans le format que vous désirez (liste, tableau ou autre).</li>
	  <li>Le paragraphe affiché avant l'affichage du résultat de votre requête doit expliquer ce que vous affichez.</li>
	  <li>Vous ne faites que la partie affichage, et non le volet gestion.</li>
	  <li><i>Exemple : Liste de recettes avec thématique. J'affiche la liste des recettes avec le nom de la thématique.</i></li>
	</ul>
	
	<h4>Étape 4 : Sécurité et authentification</h4>
	<ul>
	  <li>Ajoutez une table dans la base de données pour permettre l'ajout d'un module d'authentification.</li>
	  <li>Complétez le module de connexion (le modal est présent, mais les champs de formulaire doivent être ajoutés et le bouton Connexion doit être codé).</li>
	  <li>Assurez-vous que le menu <span class="badge badge-info">Adminsitration</span> apparaît seulement lorsque l'utilisateur est connecté.</li>
	  <li>Assurez-vous qu'il est impossible d'accéder à la gestion des nouvelles (/administration/nouvelles.php) si on n'est pas connecté : un message d'<span class="badge badge-danger">erreur</span> s'affiche dans ce cas.</li>
	  <li>Assurez-vous que cet utilisateur est fonctionnel : 
		<ul>
		  <li>Utilisateur : admin</li>
		  <li>Mot de passe : votre # de DA</li>
		</ul>
	  </li>
	</ul>
	
	<h4>Étape 5 : Déploiement</h4>
	<ul>
	  <li>Déployez votre projet chez votre hébergeur</li>
	  <li>Assurez-vous que le projet n'est pas indexé (fichier robots.txt)</li>
	  <li>Assurez-vous que les erreur PHP ne s'affichent pas (.htaccess)</li>
	</ul>
	
	<h4>Étape 6 : Remise</h4>
	<ul>
	  <li>Le projet doit être remis avant le 20 septembre 23h59</li>
	  <li>Sur Classroom : 
		<ul>
		  <li>Script de la base de données (finale)</li>
		  <li>Code source</li>
		  <li>Url menant à votre site</li>
		</ul>	
	  </li>
	</ul>
  </div>

<?php include_once('include/footer.php'); ?>
