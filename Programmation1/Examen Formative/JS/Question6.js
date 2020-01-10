// Vous devez compléter un programme qui permet de calculer la facture pour l’achat d’un robot imprimable en 3 dimensions.
//
//     L’usager doit sélectionner le contrôleur
// 55$ pour un RaspBerry Pi
// 15$ pour un Raspberry Pi Zero
//
// L’usager doit décider du nombre de moteurs entre 2 et 24.
// Un moteur coûte 5$
//
// L’usager décide s’il veut une caméra USB ou non
// La caméra coûte 35$
//
// L’usager décide s’il veut une matrice de LEDS pour les yeux
// La matrice coûte 10$ pour les deux yeux.
//
//     Il faut ensuite ajouter 20$ pour le filament 3D.
//     Il faut ajouter 15$ pour la batterie USB.
//
//     RasPiBot aimerait que votre programme affiche
//
// un résumé de l’achat
// ex: “Robot avec Raspberry Pi Zero, 10 moteurs, pas de caméra, pas de matrice de LEDS.”
// le prix
// le prix avec la livraison de 15%.

//déclaration des variables
var OptionControleur;
var NombreMoteurs;
var Camera;
var MatriceLeds;
var prix;
var prixLivraison;
var resume="<p><b>Robot avec: </b></p>";

//Modification apportée après la remise de l'examen dans le but de traiter des exceptions
var valide = true;

var Filament3D = 20;
var BatterieUSB = 15;

prix= Filament3D + BatterieUSB;

//lecture des variables
OptionControleur=Number(prompt("Robot imprimable en 3 dimensions:\nSélectionnez le contrôleur:\nOption 1. 55$ pour un RaspBerry Pi\nOption 2. 15$ pour un Raspberry Pi Zero"));
NombreMoteurs=Number(prompt("Combien de moteurs voulez vous entre 2 et 24? \nChaque moteur coûte 5$."));
Camera=Number(prompt("Voulez vous une caméra? Le prix est de 35$\n1. Oui\n2. Non"));
MatriceLeds=Number(prompt("Voulez vous une matrice de LEDS pour les yeux? \nLa matrice coûte 10$ pour les deux yeux.\n1. Oui\n2. Non"));

//calcule du prix et determination du résumé
//type de controleur
if ( OptionControleur === 1)
    {
        prix = prix + 55;
        resume= resume +"Raspberry Pi, ";
    }
else if ( OptionControleur === 2)
    {
        prix = prix + 15;
        resume= resume + "Raspberry Pi Zero, ";
    }
else
    {
        valide = false;
    }


//nombre de moteurs
if( NombreMoteurs >= 2 && NombreMoteurs <=24)
    {
        prix = prix + NombreMoteurs * 5;
        resume= resume + NombreMoteurs + " moteurs, ";
    }
else
{
    valide = false;
}


//camera
if ( Camera === 1)
{
    prix = prix + 35;
    resume= resume + "avec caméra, ";
}
else if ( Camera === 2)
{
    resume= resume + "pas de caméra, ";
}
else
{
    valide = false;
}


//matrice leds
if ( MatriceLeds === 1)
{
    prix = prix + 10;
    resume= resume + "avec matrice de LEDS pour les yeux.";
}
else if ( MatriceLeds === 2)
{
    resume= resume + "pas de matrice de LEDS pour les yeux.";
}
else
{
    valide = false;
}

prixLivraison = prix + prix * 15/100;

//Affichage résumé de l’achat
if (valide)
    {
        document.write("<h2><u>Résumé de l’achat: </u></h2>" +
                "<p>" + resume + "</p>"+
                "<b>Prix: </b>"  + prix + "$ " + "<br>" +
                "<b>Prix avec Livraison: </b>" + prixLivraison + "$");
    }
else
    {
        alert("Vous avez rentré des choix invalides!");
    }



