// Eric Martins - 13 décembre 2019
// Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00.

var montant=5;

while ( montant <= 100)
{
    document.write("Montant: " + montant + "$" + " Tax: " + (montant * 0.09).toFixed(2) + "$<br>");
    montant += 5;
}