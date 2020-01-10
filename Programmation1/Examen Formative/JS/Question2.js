// Eric Martins - 28 novembre 2019

// Vous devez calculer le nombre de points de dommages de l’attaque Mad Bull GX de Tauros. L’attaque fait :
//
//     100 points de dommages si l’adversaire a moins de 60 points de vie (hp).
// 150 points de dommages si l’adversaire a entre 60 et 79 hp.
// 200 points de dommages si l’adversaire a entre 80 et 99 hp.
// 250 points si l’adversaire a 100 hp et plus.
//
//     Écrire un algorithme le code qui permet de :
//
//     Calculer et d’afficher les points de dommages de l’attaque Mad Bull GX à partir des points de vie d’un Pokémon adversaire.


//déclaration des variables
var PointsDeVie;
var PointsDeDommages;

//lecture des variables
PointsDeVie = Number(prompt("Entrez les points de vie d’un Pokémon adversaire en hp."));

//Calcul du resultat en utilisant en cycle if

if (PointsDeVie < 60)
{
    PointsDeDommages = 100;
}
else if ( PointsDeVie >= 60 && PointsDeVie <= 79)
{
    PointsDeDommages = 150;
}
else if ( PointsDeVie >= 80 && PointsDeVie <= 99)
{
    PointsDeDommages = 200;
}
else if ( PointsDeVie >= 100)
{
    PointsDeDommages = 250;
}

document.write("Les points de dommages de l’attaque Mad Bull GX est: " + PointsDeDommages + " points.");


