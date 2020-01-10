// Eric Martins - 14 novembre 2019
//11.Lire une lettre au clavier.
// Si la lettre est 'w', écrire Avancer.
// Si la lettre est 'a', écrire Gauche.
// Ajouter 's' et 'd'.
// Si c'est autre chose, écrire un message d'erreur.

//déclaration des variables
var lettre;

//lecture des variables
lettre=(prompt("Entrez la lettre pour la direction"));

// cicle pour verifier et afficher la direction
if      ( "w" === lettre)
    document.write("Avancer");
else if ( "a" === lettre)
    document.write("Gauche");
else if ( "s" === lettre)
    document.write("Reculer");
else if ( "d" === lettre)
    document.write("Droite");
else
    document.write("Vouz n'avez pas entré la bonne lettre.");