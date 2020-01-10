// Eric Martins - 05 décembre 2019
// Question 1 - Examen 1
//
// Le prix saisonnier d’un billet pour la ronde est de 50$. Toutefois, il y a des possibilités de rabais pour des inscriptions en groupe :
//     Aucun rabais pour moins de 10 personnes.
// 10 personnes et plus, 5% de rabais.
// 20 personnes et plus, 10% de rabais.
// 30 personnes et plus, 15% de rabais.
// 40 personnes et plus, 20% de rabais.
//
//     Écrivez un programme qui demande, pour une inscription donnée, le nombre de personnes et affichera le montant de l’inscription à la fin.

//déclaration des variables
var NombrePersonnes;
var PrixSansRabais;
var TauxRabais;
var Total;
var valide = true;

//lectures du nombre de personnes
NombrePersonnes=Number(prompt("Inscription en groupe:\nCombien de personnes dans le groupe?"));

// Calcul du taux de rabais
if ( NombrePersonnes < 10 )
{
    TauxRabais = 0;
}
else if ( NombrePersonnes >= 10 && NombrePersonnes < 20 )
{
    TauxRabais = 0.05;
}
else if ( NombrePersonnes >= 20 && NombrePersonnes < 30 )
{
    TauxRabais = 0.10;
}
else if ( NombrePersonnes >= 30 && NombrePersonnes < 40 )
{
    TauxRabais = 0.15;
}
else if ( NombrePersonnes >= 40 )
{
    TauxRabais = 0.20;
}
else
{
    valide = false;
}

//Calcul total a payer
PrixSansRabais = NombrePersonnes * 50;
Rabais= PrixSansRabais * TauxRabais;
Total= PrixSansRabais - Rabais;

//Affichage
if (valide === true)
{
    if (Rabais === 0)
    {
        document.write("Vous n'avez pas droit au rabais, votre total à payer est de <b>" + Total + "$</b>.");
    }
    else
    {
        document.write("Vous avez droit à un rabais de <u>" + TauxRabais * 100 +"%</u> pour un total de <b>" + Total +"$</b> à payer." );
    }
}
else
{
    document.write("Vous n'avez pas entré un chiffre valide!");
}