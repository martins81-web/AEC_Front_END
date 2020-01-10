// Eric Martins - 05 décembre 2019
// Question 4 - Examen 1
// Vous devez compléter un programme qui permet de calculer l’aire de formes.
//     En entrée, l'utilisateur doit entrer la lettre correspondant au type de figure demandé:
// - "O" pour cercle : PI * rayon2
// - "R" pour rectangle : longueur * largeur
// - "T" pour triangle rectangle : (longueur * largeur) / 2
// - "C" pour carré : côté2
//
// L’utilisateur doit pouvoir entrer son choix en lettres minuscules ou en majuscules.
//
//     En fonction de la lettre saisie par le client, votre programme doit demander les renseignements nécessaires pour le calcul de l’aire.
//
//     Une fois les informations saisies par l'utilisateur, votre programme doit afficher le type sélectionné ainsi que le calcul de l'aire.

//déclaration des variables
var forme;
var type;
var rayon;
var longueur;
var largeur;
var cote;
var aire;
var valide = true;
var Pi = Math.PI;

//Lecture du choix de forme de l'utilisateur
forme = prompt( "Quel est le type de forme pour laquelle vous desirez calculer l'aire?\nChoisissez l'option:\n"+
                " \"O\" pour cercle\n" +
                " \"R\" pour rectangle\n" +
                " \"T\" pour triangle rectangle\n" +
                " \"C\" pour carré\n");

forme = forme.toLowerCase();

//demandes des renseignements nécessaires et calcul de l’aire
if (forme === "o" || forme === "r" || forme === "t" || forme === "c")
{
    if (forme === 'o')
        {
            rayon = Number ( prompt("Quel est le rayon de votre cercle?"));
            if ( isNaN(rayon) || rayon < 0)
            {
                valide = false;
            }
            else {
                type = "cercle avec un rayon de " + rayon ;
                aire = Pi * rayon * rayon;
            }

        }
    else if ( forme ===  "r")
        {
            largeur = Number (prompt("Quel est la largeur de votre rectangle?"));
            longueur = Number (prompt ("Quel est la longueur de votre rectangle?"));

            if ( isNaN(largeur) || largeur < 0 || isNaN(longueur) || longueur < 0 )
            {
                valide = false;
            }
            else {
                type = "rectangle avec une largeur de " + largeur + " et une longueur de " + longueur;
                aire = largeur * longueur;
            }

        }
    else if (forme ===  "t")
        {
            largeur = Number ( prompt("Quel est la largeur de votre triangle rectangle?"));
            longueur = Number( prompt("Quel est la longueur de votre triangle rectangle?"));

            if ( isNaN(largeur) || largeur < 0 || isNaN(longueur) || longueur < 0 )
            {
                valide = false;
            }
            else {
                type = "triangle rectangle avec une largeur de " + largeur +  " et une longueur de " + longueur;
                aire = (largeur * longueur) / 2;
            }

        }
    else if (forme ===  "c")
        {
            cote = Number ( prompt ("Quel est le côté de votre carré em mètres?"));
            if ( isNaN(cote) || cote < 0)
            {
                valide = false;
            }
            else {
                type = "carrée avec un côté de " + cote ;
                aire = cote * cote;
            }
        }
}
else
{
    valide = false;
}


//affichage du resultat
if (valide)
{
    document.write("Votre choix de figure est le " + type + ". Son aire est de <b>" + aire.toFixed(2)+ "</b>" );
}
else
{
    alert("Vous avez rentré des choix invalides!");
}