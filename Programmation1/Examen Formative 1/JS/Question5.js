// Eric Martins - 28 novembre 2019
// Écrire le code qui permet de lire au clavier la valeur d’un angle d’une main de robot et d’afficher sa position.
// Pour faire ce choix, utilisez la table  suivante :
//
//     position  à afficher		angle
//
// Main fermée	                       0 <= angle <= 39
// Main agrippe		         40 <= angle <= 89
// Main ouverte		         90 <= angle <= 180
//
// Si l’angle ne contient aucune de ces valeurs, alors affichez ″Le robot est hors de contrôle″.

//déclaration des variables
var Angle;
var Position="";

//lecture des variables
Angle = Number(prompt("Quel est l'angle de la main du robot?"));

//Calcul de la position en utilisant un cycle if
if ( Angle >= 0 && Angle <= 39){
    Position = "Main fermée";
}
else if (Angle >= 40 && Angle <= 89 ){
    Position = "Main agrippe";
}
else if (Angle >= 90 && Angle <= 180 ){
    Position = "Main ouverte";
}
else {
    document.write("Le robot est hors de contrôle.");
}

//Affichage de la postition de la main du robot
if ( Position != "" ){
    document.write("La position de la main du robot est: " + Position);
}