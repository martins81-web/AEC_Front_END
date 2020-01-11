//Eric Martins - 10 janvier 2020
// C’est le temps du recensement. Nous aimerions connaître le nombre d’enfants que chaque famille
// possède et par la suite afficher un tableau de statistiques comme suit : Le nombre d’enfants est l’indice du tableau.
// Regrouper ensemble les 10 enfants et plus.
//Truc : il faut utiliser l'indice du tableau pour représenter le nombre d'enfants.
//
// Par exemple : tab[2] = 10; signifie qu'il y a 10 familles qui ont 2 enfants.


var terminer="non";
var nombreEnfants = new Array();
var i=0;

while (terminer==="non"){
    nombreEnfants[i]= Number(prompt("Combien d'enfants dans la famille? Entrez (-1) pour terminer."));

    if ( nombreEnfants[i] >= 0){
        i++;
    }
    else if (nombreEnfants[i]===-1){
        terminer = "oui";
    }
}

var plusGrand = nombreEnfants[0];
for ( i=1 ; i <= nombreEnfants.length-2 ; i++) {
    if (plusGrand < nombreEnfants[i]) {
        plusGrand = nombreEnfants[i];
    }
}

var tab= new Array(plusGrand+1).fill(0);
for ( i=0 ; i < nombreEnfants.length; i++){
    tab[nombreEnfants[i]]++;
}

document.write(    "Nb d'enfants" + " ------------ " + "Nb familles recensées<br><br>");
for ( i=0 ; i < tab.length; i++){
    document.write(i +  " --------------------------------- " + tab[i]+"<br>");
}