// Eric Martins - 24 octobre 2019


//10.Faire l’algorithme qui permet de calculer la facture d’un client. Cette facture contient la date, le montant de chacun des 3 articles achetés, les taxes de vente et le grand total de la facture.
// Vous demandez à l'usager la date et le montant de chacun des 3 articles achetés. Le montant de TPS est de 5% et la TVQ est de 9.975%.
// Vous affichez la date, les 2 montants de taxes et le grand total.

//Déclaration des variables
var Article1="Pair de souliers";
var Article2="Pantalons";
var Article3="Chemise";
var PrixArticle1, PrixArticle2, PrixArticle3;
var Date;
var SousTotal, Total;
var TPS;
var TVQ;

//lecture des varibles
PrixArticle1=Number(prompt("Quel est le prix de l'article "+Article1+" en $?"));
PrixArticle2=Number(prompt("Quel est le prix de l'article "+Article2+" en $?"));
PrixArticle3=Number(prompt("Quel est le prix de l'article "+Article3+" en $?"));
Date=prompt("Quel est la date (JJ/MM/AAAA) ?");

//Calcul
SousTotal=PrixArticle1+PrixArticle2+PrixArticle3;
TPS=SousTotal*0.05;
TVQ=SousTotal*0.09975;
Total=SousTotal+TPS+TVQ;

//Affichage
console.log("Date: "+Date);
console.log("\n"+Article1+" "+PrixArticle1+"$");
console.log("\n"+Article2+" "+PrixArticle2+"$");
console.log("\n"+Article3+" "+PrixArticle3+"$");
console.log("\nSoustotal "+SousTotal+"$");
console.log("\n"+"TPS: "+TPS+"$");
console.log("\n"+"TVQ: "+TVQ+"$");
console.log("\n"+"Total: "+Total+"$");