// // Eric Martins - 12 décembre 2019
// Faire un programme qui boucle 10 fois. À toutes les itérations, votre programme génère un nombre aléatoire entre 0 et 1 et vous demande aussi de choisir un nombre entre 0 et 1.
// Si le nombre est identique, vous gagnez, perdez sinon. Vous affichez le pointage à la fin des 10 itérations.

var i;
var nbEntre;
var nbTirage;
var pointage = 0;

for ( i = 0 ; i < 10 ; i++)
{
    nbTirage = Math.round(Math.random());
    nbEntre = Number(prompt("Choisissez 1 ou 0"))

    document.write(i+ "- Choisi: " + nbEntre + " Tirage: " + nbTirage + "<br>");

    if ( nbTirage === nbEntre)
    {
        pointage ++;
    }
}

document.write("Pointage: " + pointage);