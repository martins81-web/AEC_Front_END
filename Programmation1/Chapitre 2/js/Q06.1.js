// Eric Martins - 14 novembre 2019
//6.   Lire une note au clavier et afficher la lettre correspondante.
// 90 et plus : A
// Entre 80 et 90 : B
// Entre 70 et 80 : C
// Entre 60 et 70 : D
// Moins de 60 : E
//
// * Codez l’exercice #6 2 fois, une fois en débutant le IF par la cote A et une fois par la cote E
// (en sens inverse).

//déclaration des variables
var note;

//lecture des variables
note=Number(prompt("Entrez vote note"));

//cicle if pour afficher la lettre correspondante

if ( note >= 90)
    {
        document.write("Vote note correspond a la lettre A.");
    }
    else if ( note >= 80 && note < 90)
    {
        document.write("Vote note correspond a la lettre B.");
    }
    else if ( note >= 70 && note < 80)
    {
        document.write("Vote note correspond a la lettre C.");
    }
    else if ( note >= 60 && note < 70)
    {
        document.write("Vote note correspond a la lettre D.");
    }
else
    {
        document.write("Vote note correspond a la lettre E.");
    }