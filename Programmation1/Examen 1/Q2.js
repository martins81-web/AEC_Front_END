// Eric Martins - 05 décembre 2019
// Question 2 - Examen 1
// Faire le code qui permet de lire au clavier la valeur de la variable âge et afficher tranche d'âge en fonction de l'âge.
// Pour faire ce choix, utiliser la table suivante :
//     tranche à afficher	                      age
//
// enfant			           0  <=  age  <= 12
// adolescent		         13  <=  age  <= 17
// adulte			         18  <=  age  <= 54
// senior			         55  et plus
//
// Si note ne contient aucune de ces valeurs, alors affichez ″Pas encore né.″.

//déclaration des variables
var age;
var trancheDage;
var nee = true;

//Lecture au clavier
age = Number(prompt("Quel est votre age?"));

//"calcul" de la tranche d'age
if ( age >= 0 && age <= 12)
{
    trancheDage="enfant";

}
else if ( age >= 13 && age <= 17)
{
    trancheDage="adolescent";

}
else if ( age >= 18 && age <= 54)
{
    trancheDage="adulte";

}
else if ( age >= 55)
{
    trancheDage="senior";

}
else
{
    nee = false;
}

//affichage
if (nee === false)
    {
        document.write("Pas encore né.");
    }
else
    {
        document.write("Votre tranche d'age est <b><u>" + trancheDage + "</b></u>.");
    }