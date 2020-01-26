//Eric Martins - 11 janvier 2020
// Lire 10 valeurs déjà triées (en ordre) et les mettre dans un tableau.
// Par la suite, lire une nouvelle valeur et afficher toutes les valeurs lues dans l’ordre en ajoutant la nouvelle valeur à la bonne place.

var tableau = [3,7,9,12,16,20,31,43,50,55];
var valeur;
var i=0;
var index=0;

valeur= Number(prompt("Entrez un valeur pour être inséré dans le tableau suivant [3,7,9,12,16,20,31,43,50,55]"));

document.write( tableau+"<br>");

for (i=tableau.length-1 ; ; i--){

    if( valeur <= tableau[i]) {
        tableau[i+1] = tableau[i];  //décalage vers la droite du tableau
    }
    else{
        tableau[i+1]=valeur;
        break;
    }
}

document.write(tableau+"<br>");
