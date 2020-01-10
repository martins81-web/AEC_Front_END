// Eric Martins - 12 décembre 2019
// Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00.

var montant;

for ( montant = 5 ; montant <= 100 ; montant += 5)
{
    console.log("Montant: " + montant + "$" + " Tax: " + (montant * 0.09).toFixed(2) + "$");
}