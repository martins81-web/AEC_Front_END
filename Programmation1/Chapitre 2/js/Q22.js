// Eric Martins - 14 novembre 2019
//Créez un programme permettant de changer la couleur du texte de la console.
//Offrez trois choix de couleurs de fond et de texte à l'utilisateur
//Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur

//déclaration des variables
var couleurTexte, couleurFond, texte;

//lectures des choix de couleurs
couleurTexte=Number(prompt("Choisisser une couleur pour le texte de la console:\n1: rouge\n2: bleu\n3: vert"));
couleurFond=Number(prompt("Choisisser une couleur pour le fond  de la console:\n1: brun\n2: rose\n3: jaune"));
texte= prompt("Entrez le texte que vous voulez écrire : ");

// affichage de d'un texte avec les choix de couleur de l'utilisateur
if      (1 === couleurTexte && 1 === couleurFond)
        console.log('%c' + texte, 'color: red; background: brown');
else if (1 === couleurTexte && 2 === couleurFond)
        console.log('%c' + texte, 'color: red; background: pink');
else if (1 === couleurTexte && 3 === couleurFond)
        console.log('%c' + texte, 'color: red; background: yellow');
else if (2 === couleurTexte && 1 === couleurFond)
        console.log('%c' + texte, 'color: blue; background: brown');
else if (2 === couleurTexte && 2 === couleurFond)
        console.log('%c' + texte, 'color: blue; background: pink');
else if (2 === couleurTexte && 3 === couleurFond)
        console.log('%c' + texte, 'color: blue; background: yellow');
else if (3 === couleurTexte && 1 === couleurFond)
        console.log('%c' + texte, 'color: green; background: brown');
else if (3 === couleurTexte && 2 === couleurFond)
        console.log('%c' + texte, 'color: green; background: pink');
else if (3 === couleurTexte && 3 === couleurFond)
        console.log('%c' + texte, 'color: green; background: yellow');
else
        console.log("Vous n'avez pas entré les choix de couleurs correctement!");




