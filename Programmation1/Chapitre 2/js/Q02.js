// Eric Martins - 14 novembre 2019
//2.  Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant total de ses achats est plus grand que 200.00$.
// Écrire un algorithme qui permet de calculer et d’afficher la réduction que chaque acheteur a droit, connaissant le montant total des achats.

//déclaration des variables
var total;
var reduction = 15/100;
var totalApresReduction;

//lecture
total=Number(prompt("Quel est le total de la facture en $?"));

//Cicle if pour accorder ou non le rabais
if ( total > 200 )
    {
        totalApresReduction = total - total * reduction;
    }
else
    {
        totalApresReduction = total;
    }

//Affichage du resultat
document.write("Le total après la reduction apliquée est de: " + totalApresReduction + " $");