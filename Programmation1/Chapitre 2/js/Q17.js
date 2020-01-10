// Eric Martins - 14 novembre 2019
//Lire une lettre de l'alphabet. Afficher le mot voyelle (pour : a, e, i, o, u, y) ou le mot consonne (pour les autres) selon la lettre lue.
// Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules ou en majuscules.

//declarations des variables
var lettre;

//lecture des variables
lettre=prompt("Entrez une lettre");

//if qui vérifie si c'est une lettre ou autre chose
if ((lettre >= 'a' && lettre <= 'z') || (lettre >= 'A' && lettre <= 'Z'))
{
//manipulation lowercase
    lettre = lettre.toLowerCase();

//cicle pour vérifier si voyelle ou consonne

    if (lettre === "a" || lettre === "e" || lettre === "i" || lettre === "o" || lettre === "u" || lettre === "y")
        document.write("C'est une voyelle!");
    else
        document.write("C'est une consonne!");
}
else
document.write("Vous n'avez pas entré une lettre, vous avez entré un chiffre ou un caractère spécial");
