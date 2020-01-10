// Eric Martins - 14 novembre 2019
//Lire le montant de vente et afficher le montant d’escompte correspondant sachant que le taux d’escompte est de 12% et
// n’est calculé que sur les montants supérieurs ou égaux à $500.00.

//déclaration des variables
var MontantVente;
var TauxEscompte=12/100;

//lecture des variables
MontantVente=Number(prompt("Entrez le montant de vente"));

// calcul du montant d’escompte
if ( MontantVente < 500 )
    document.write("Pas d'escompte");
else
    document.write("L'escompte est de : " + MontantVente * TauxEscompte + "$");

