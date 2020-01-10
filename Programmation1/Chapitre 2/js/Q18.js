// Eric Martins - 14 novembre 2019
//Lire une note d’examen et afficher « Échec » si la note est inférieure à 60 et « Bravo » si la note est supérieure ou égale à 60.

//déclaration des variables
var note;

//lecture des variables
note=Number(prompt("Entrez la note"));

if ( note >= 60)
    document.write("Bravo");
else
    document.write("Échec");

