// Eric Martins - 14 novembre 2019
//1. Lire 2 nombres A et B différents. Trouver et afficher le plus petit et le plus grand.
// Si les deux nombres sont identiques, affichez un message d'erreur à l'utilisateur.

//déclaration des variables
var A, B;

//lecture des variables

A=Number(prompt("Entrez 2 nombres différents, entrez le premier maintenant"));
B=Number(prompt("Entrez le deuxieme"));

//cycle if
if ( A === B)
    document.write("Les deux nombres ne sont pas différents!");
else if ( A > B )
    document.write("Le nombre plus grand est: " + A + " et le plus petit est: "+ B);
else
    document.write("Le nombre plus grand est: " + B + " et le plus petit est: "+ A);

