// Eric Martins - 24 octobre 2019

//11.Le prix de vente d’une voiture neuve est la somme du prix de base, d’un montant de frais et d'un montant de profit du concessionnaire et des montants taxes de ventes.
// Les frais sont de 2% du prix de base et le pourcentage du concessionnaire est de 12% du prix de base.
// et le premier montant de taxe de vente est de 5% du sous-total du prix de base, des frais et du profit du concessionnaire et
// le deuxième montant de taxe est de 9,975% du prix de base, des frais et du profit du concessionnaire.
// Écrire l’algorithme qui lit le prix de base et qui
// imprime le montant de frais, le montant de commission, les deux montants de taxes et le prix de vente total, le tout sur des lignes différentes avec des messages explicites.


//Déclaration des variables
var PrixBase, Frais, Profit, Tax1, Tax2;
var Total, SousTotal;

//Lecture des variables
PrixBase=Number(prompt("Quel est le prix de base de la voiture en $?"));

//Calcul des différent frais, taxes et total
Frais=PrixBase*0.02;
Profit=PrixBase*0.12;
SousTotal=PrixBase+Frais+Profit;
Tax1=SousTotal*0.05;
Tax2=SousTotal*0.09975;
Total=SousTotal+Tax1+Tax2;

//Affichage
console.log("PRUEVE D'ACHAT");
console.log("Frais variés: "+Frais+"$");
console.log("\nProfit du concessionnaire: "+Profit+"$");
console.log("\nTax1: "+Tax1+"$");
console.log("\nTax2: "+Tax2+"$");
console.log("\nPrix totale de la voiture: "+Total+"$");