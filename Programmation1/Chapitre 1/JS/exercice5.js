// Eric Martins - 24 octobre 2019


//5. Lire le nom et l’âge d’un individu, puis convertir son âge en jours (approximatif). Imprimer un message incluant son nom pour l’informer du nombre de jours vécus.

//déclaration des variables
var Nom, Age, Jours;

//Lecture des variables
Nom=prompt("Quel est votre nom?");
Age=Number(prompt("Quel est votre age en années?"));

//Calcul
Jours=Age*365;


// Affichage
console.log(Nom+", vous avez "+Jours+" jours de vie.");
//alert(Nom+" vous avez "+Jours+" jours de vie");