//Eric Martins - 10 janvier 2020
// Créez un tableau de 10 valeurs :
//
// 1 2 3 4 5 6 7 8 9 10
//
//     Bouclez pour i de 0 à length-1.
//
// Générez un nombre aléatoire r.
//
//     Échangez les valeurs du tableau aux indices i et r.
//
//     À la fin de la boucle, votre tableau est mélangé!
// random= Math.floor(Math.random() *[(y-x)+1] + x );       x-start y-end

var tableau = ["1","2","3","4","5","6","7","8","9","10"];

var i;
var r=0;
var cache=0;

document.write(tableau+"<br>");

for (i = 0 ; i < tableau.length-1  ; i++) {

    var r = Math.floor(Math.random() * (tableau.length));
    var cache = tableau[i];
    tableau[i] = tableau[r];
    tableau[r] = cache;

}

document.write(tableau+"<br>");

