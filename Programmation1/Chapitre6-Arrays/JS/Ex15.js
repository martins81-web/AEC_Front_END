//Eric Martins - 11 janvier 2020
// Lire 2 valeurs dans un tableau. Inverser ces deux valeurs.

var tab = [];
var tabInv = [];


for ( i=0 ; i<2; i++){
    tab[i] = Number(prompt("Entrez un nombre:"));
}

for ( i=0 ; i<tab.length ; i++){
    tabInv[i]=tab[tab.length-1-i];
}

document.write(tab+"<br>");
document.write(tabInv+"<br>");