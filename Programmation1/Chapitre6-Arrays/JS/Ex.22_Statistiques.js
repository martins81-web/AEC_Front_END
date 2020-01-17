// Eric Martins - 16 janvier 2020
// 22 La Martingale
// http://fr.wikipedia.org/wiki/Martingale
//     Vous vous souvenez sûrement de la technique de la Martingale dont je vous avais parlé au premier cours. (Shany)
//
// Il s’agit de jouer à un jeu qui a 50 % des chances de gagner. Par exemple, la roulette ou le blackjack.
//
//     On mise 1$. Si on gagne, on obtient 1$ de profit.
//     Si on perd, on mise le double 2$. Si on gagne, on a encore 1$ de profit.
//     Si on perd, on mise le double...
//
// Je veux que vous testiez la technique de la Martingale en jouant jusqu’à ce que vous ayez empoché 1000 $.
//     Je veux savoir le montant maximal que vous avez dû mettre sur la table (le nombre de défaites consécutives).
// Suite à ces résultats, est-ce que vous investissez votre argent sur la Martingale?
//
//     Essayez d’ajouter une boucle qui teste la Martingale 1000 fois et affichez un tableau de statistiques quant au montant maximal sur la table…
// Pour tester la Martingale en action gratuitement avec des BitCoins 999dice.com


var martingale = 1000; // nombre de martingales
var objective = 1000; //objectif de profit
var tabMaxMise = [];

for ( let i = 0 ; i < martingale; i++) {
    var mise=1;
    var profit=0;
    var roulette;
    var compteur=1;
    var maxMise=1;

    while (profit < objective) {
        roulette = Boolean( Math.round( Math.random() ) );

        if (roulette) {
            profit = profit + mise;
            mise = 1;
        }
        else {
            profit = profit - mise;
            mise *= 2;

            if (mise > maxMise) {
                maxMise = mise;
            }
        }

        compteur++;
    }

    tabMaxMise [i] = Math.log2(maxMise); // 2^x = valeur maximale misé, je prends le x pour l'utiliser plutard comme index de mon tableau statistique

}


//ici je determine le valeur max de ce tableau, comme ça je determine l'index plus grand du tableau statisque

var Max=tabMaxMise[0];
for ( let i=1 ; i < tabMaxMise.length ; i++) {
    if (Max < tabMaxMise[i]) {
        Max = tabMaxMise[i];
    }
}


// criation d'un tableau avec l'index plus grand determiné anteriorment plus 1 comme grandeur.

var statistique = new Array(Max+1);



// je mets tous les valeurs du tableau a zero  pour pouvoir incrementer chaque position en le accordant au meme temps le type integer

for ( let i = 0 ; i < statistique.length ; i++ ){
    statistique[i]=0;
}


// dans la position i j'incremente a chaque fois que ce valeur maximale a été ateint...
// exemple:  i=10: 2^i = 2^10 = 1024, ça va incrementer le nombre de fois que la valeur 1024$ a été la maximale pour chaqu'une des 1000 tentatives de la Martingale

for ( let i = 0 ; i < tabMaxMise.length ; i++ ){
    statistique[tabMaxMise[i]]++;
}



//affichage en tableau de statistiques

document.write("<h1><b>Statistiques après "+martingale+" tentatives de la Martingale jusqu'à "+objective+" $</b></h1><br>");

document.write("<table>" +
    "<tr> " +
    "<th>Nombre de défaites <br>consécutives</th>" +
    "<th>Montant maximale <br> sur la table</th>" +
    "<th>Nombre <br> d'ocurrences</th>" +
    "<th>Pourcentage</th>" +
    "</tr>");

for (let i=0 ; i<statistique.length ; i++){
    if ( statistique[i] !== 0){
        document.write(  "<tr>" +
                            "<td>"+ i                                                                    + "</td>" +
                            "<td>"+ Math.pow(2,i).toLocaleString()                                   +" $</td>" +
                            "<td>"+ statistique[i].toLocaleString()                                       +"</td>" +
                            "<td>"+ ((statistique[i]/1000)*100).toFixed(1).toLocaleString()+" % </td>" +
                        "</tr>");
    }
}
document.write("</table>");