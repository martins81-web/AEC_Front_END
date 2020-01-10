// Eric Martins - 12 décembre 2019
//Le premier jour de l'ouverture de votre compte, vous déposez .01 .
// À chaque jour pendant 10 jours, vous déposez le double de la veille.
// Affichez pour chaque jour, le numéro du jour, le montant déposé et le solde de votre compte.

var i ;
var montant = .01;
var solde=0;

for ( i = 1 ; i <= 10 ; i++)
{
    solde += montant;
    console.log("Número du jour: " + i + "    Montant déposé: " + montant + "    Solde: " + solde.toFixed(2));
    montant *= 2;
}
